/* ==========================================================
   Marko's Prep Desk — App
   ========================================================== */

const STORAGE = {
  history: 'mpd_history_v2',
  streak: 'mpd_streak_v2',
  flagged: 'mpd_flagged_v2'
};

// ============== TOPIC MAPPING ==============
// Maps narrow per-question topic labels to broad Regents domains.
// This lets drill mode group enough questions per "topic" to be useful,
// while keeping the granular labels visible in question review.
const TOPIC_DOMAIN = {
  // Algebra I domains (NY State Common Core)
  "Functions: Interpreting Graphs": "Functions",
  "Functions: Definitions": "Functions",
  "Functions: Modeling": "Functions",
  "Functions: Comparing Growth": "Functions",
  "Functions: Domain and Range": "Functions",
  "Function Evaluation": "Functions",
  "Function Transformations": "Functions",
  "Solving f(x) = g(x)": "Functions",

  "Sequences": "Sequences",
  "Sequences: Arithmetic": "Sequences",
  "Sequences: Geometric": "Sequences",

  "Exponential Functions": "Exponentials & Exponent Rules",
  "Exponent Rules": "Exponentials & Exponent Rules",
  "Compound Interest": "Exponentials & Exponent Rules",

  "Polynomials": "Polynomials",
  "Polynomial Multiplication": "Polynomials",
  "Polynomials: Degree": "Polynomials",
  "Polynomials: Zeros": "Polynomials",
  "Polynomials: Zeros and Factors": "Polynomials",

  "Quadratics: Axis of Symmetry": "Quadratics",
  "Quadratics: Interpreting Tables": "Quadratics",
  "Quadratics: Range": "Quadratics",

  "Solving Equations with Fractions": "Equations & Inequalities",
  "Solving Literal Equations": "Equations & Inequalities",
  "Linear Equations: y-intercept": "Equations & Inequalities",
  "Inequalities": "Equations & Inequalities",
  "Inequalities: Modeling": "Equations & Inequalities",

  "Statistics: Two-Way Tables": "Statistics",
  "Unit Conversions": "Modeling & Reasoning",
  "Rational/Irrational Numbers": "Number Sense",

  // Living Environment domains
  "Cells: Organelles": "Cells & Cellular Processes",
  "Cells: Receptors": "Cells & Cellular Processes",
  "Cells: Differentiation": "Cells & Cellular Processes",
  "Cellular Processes": "Cells & Cellular Processes",
  "Levels of Organization": "Cells & Cellular Processes",
  "Digestion": "Cells & Cellular Processes",

  "Genetics: Inheritance": "Genetics & Reproduction",
  "Genetics: Gene Expression": "Genetics & Reproduction",
  "Reproduction: Asexual": "Genetics & Reproduction",
  "Reproduction: Sexual": "Genetics & Reproduction",
  "Reproduction: Hormones": "Genetics & Reproduction",
  "Reproduction: Placenta": "Genetics & Reproduction",
  "Reproduction: Cloning": "Genetics & Reproduction",
  "Biotechnology: Genetic Engineering": "Genetics & Reproduction",
  "Biotechnology: GMOs": "Genetics & Reproduction",

  "Evolution: Natural Selection": "Evolution",
  "Evolution: Selection Events": "Evolution",
  "Evolution: Adaptation": "Evolution",

  "Ecology: Food Webs": "Ecology",
  "Ecology: Energy Pyramid": "Ecology",
  "Ecology: Decomposers": "Ecology",
  "Ecology: Biodiversity & Stability": "Ecology",
  "Ecology: Abiotic Factors": "Ecology",
  "Ecology: Aquatic": "Ecology",
  "Ecology: Human Impact": "Ecology",
  "Ecology: Invasive Species": "Ecology",
  "Ecology: Resource Use": "Ecology",

  "Body Systems: Working Together": "Human Body Systems",
  "Body Systems: Immune": "Human Body Systems",
  "Body Systems: Immune (Vaccines)": "Human Body Systems",
  "Homeostasis": "Human Body Systems",
  "Homeostasis: Feedback": "Human Body Systems",

  "Scientific Reasoning": "Scientific Method"
};

function broadTopic(narrowTopic) {
  return TOPIC_DOMAIN[narrowTopic] || narrowTopic;
}

// ============== STATE ==============
const state = {
  currentTest: null,
  currentMode: null,
  currentTopic: null,
  questions: [],
  answers: [],
  qIndex: 0,
  startedAt: null,
  timerInterval: null,
  timeLimitSec: null
};

// ============== UTILITIES ==============
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmtTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function fmtDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
}

function show(viewId) {
  $$('.view').forEach(v => v.classList.remove('active'));
  $('#' + viewId).classList.add('active');
  window.scrollTo(0, 0);
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE.history) || '[]'); }
  catch { return []; }
}

function saveHistory(entry) {
  const h = getHistory();
  h.unshift(entry);
  localStorage.setItem(STORAGE.history, JSON.stringify(h.slice(0, 200)));
  updateStreak();
}

function getFlagged() {
  try { return JSON.parse(localStorage.getItem(STORAGE.flagged) || '[]'); }
  catch { return []; }
}

function saveFlagged(arr) {
  localStorage.setItem(STORAGE.flagged, JSON.stringify(arr));
}

function updateStreak() {
  const h = getHistory();
  if (h.length === 0) return;

  const days = [...new Set(h.map(e => new Date(e.completedAt).toDateString()))]
    .map(d => new Date(d))
    .sort((a,b) => b - a);

  let streak = 0;
  const today = new Date(); today.setHours(0,0,0,0);
  let cursor = new Date(today);

  const last = new Date(days[0]); last.setHours(0,0,0,0);
  const dayDiff = Math.floor((today - last) / 86400000);
  if (dayDiff > 1) {
    localStorage.setItem(STORAGE.streak, '0');
    return;
  }

  for (const d of days) {
    const dd = new Date(d); dd.setHours(0,0,0,0);
    if (dd.getTime() === cursor.getTime()) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else if (dd < cursor) {
      break;
    }
  }
  localStorage.setItem(STORAGE.streak, String(streak));
}

// ============== HOME ==============
function renderHome() {
  $('#today-date').textContent = new Date().toLocaleDateString('en-US', {
    weekday:'long', month:'long', day:'numeric'
  });

  const h = getHistory();
  const streak = parseInt(localStorage.getItem(STORAGE.streak) || '0', 10);
  $('#streak-num').textContent = streak;

  let meta;
  if (h.length === 0) meta = "Take a quiz today to start.";
  else if (streak === 0) meta = "Get back at it — start a new streak.";
  else if (streak === 1) meta = `${h.length} test${h.length===1?'':'s'} taken total`;
  else meta = `Keep going. ${h.length} tests taken total.`;
  $('#streak-meta').textContent = meta;

  // test cards
  const grid = $('#test-grid');
  grid.innerHTML = '';
  TESTS.forEach(t => {
    const card = document.createElement('div');
    card.className = 'test-card' + (t.isInfoOnly ? ' info-only' : '');
    card.style.setProperty('--accent-color', t.color);
    const qs = QUESTION_BANK[t.id] || [];
    const qCount = qs.length;
    // Count distinct exam administrations in source citations
    const exams = new Set(qs.map(q => {
      const m = (q.source || '').match(/(January|June|August)\s+\d{4}/);
      return m ? m[0] : null;
    }).filter(Boolean));
    const examCount = exams.size;
    const topics = new Set(qs.map(q => q.topic)).size;
    const statsBlock = t.isInfoOnly
      ? `<div class="test-card-stats"><span>Resources & links</span></div>`
      : `<div class="test-card-stats"><span>${examCount} released exam${examCount===1?'':'s'}</span><span>${qCount} questions</span></div>`;
    card.innerHTML = `
      <div class="test-card-tag">${t.sub}</div>
      <div class="test-card-title">${t.name}</div>
      <div class="test-card-sub">${t.description.split('.')[0]}.</div>
      ${statsBlock}
    `;
    card.addEventListener('click', () => openTest(t.id));
    grid.appendChild(card);
  });
}

// ============== TEST DETAIL ==============
function openTest(testId) {
  state.currentTest = TESTS.find(t => t.id === testId);
  $('#test-detail-title').textContent = state.currentTest.name;
  $('#test-detail-desc').textContent = state.currentTest.description;
  $('#source-banner').textContent = state.currentTest.sourceNote || '';

  const qs = QUESTION_BANK[testId] || [];
  const qCount = qs.length;

  if (state.currentTest.isInfoOnly) {
    // Info-only mode for SSAT
    $('#mode-row').classList.add('hidden');
    $('#topics-row').classList.add('hidden');
    $('#info-only-block').classList.remove('hidden');
  } else {
    $('#mode-row').classList.remove('hidden');
    $('#topics-row').classList.add('hidden');
    $('#info-only-block').classList.add('hidden');

    // Compute reasonable timing — ~2 minutes per question for math, ~1.5 for biology
    const minutesPerQ = testId === 'regents-algebra1' ? 2.5 : 1.5;
    const recommendedMin = Math.ceil(qCount * minutesPerQ);
    $('#mode-meta-full').textContent =
      `${qCount} questions · ~${recommendedMin} min recommended`;
  }

  show('view-test');
}

document.addEventListener('click', e => {
  const modeCard = e.target.closest('.mode-card');
  if (!modeCard) return;
  const mode = modeCard.dataset.mode;
  if (mode === 'drill') {
    renderTopicsList();
    $('#topics-row').classList.remove('hidden');
  } else if (mode === 'full') {
    startQuiz('full');
  } else if (mode === 'quick') {
    startQuiz('quick');
  }
});

function renderTopicsList() {
  const all = QUESTION_BANK[state.currentTest.id] || [];
  // Group by broad domain
  const domainMap = {};
  all.forEach(q => {
    const domain = broadTopic(q.topic);
    if (!domainMap[domain]) domainMap[domain] = [];
    domainMap[domain].push(q);
  });
  const grid = $('#topics-grid');
  grid.innerHTML = '';

  const sorted = Object.entries(domainMap).sort((a,b) => a[0].localeCompare(b[0]));
  const drillable = sorted.filter(([_, qs]) => qs.length >= 3);
  const locked = sorted.filter(([_, qs]) => qs.length < 3);

  if (drillable.length === 0) {
    const note = document.createElement('div');
    note.className = 'topics-note';
    note.innerHTML = `<strong>Topic Drill needs at least 3 questions per domain.</strong> Adding more released exams will unlock this. For now, use Full Practice Test or Quick 10.`;
    grid.appendChild(note);
  }

  drillable.forEach(([domain, qs]) => {
    const pill = document.createElement('div');
    pill.className = 'topic-pill';
    pill.innerHTML = `
      <span class="topic-pill-name">${domain}</span>
      <span class="topic-pill-count">${qs.length} Q · drill</span>
    `;
    pill.addEventListener('click', () => {
      state.currentTopic = domain;
      startQuiz('drill');
    });
    grid.appendChild(pill);
  });

  if (locked.length > 0) {
    const sep = document.createElement('div');
    sep.className = 'topics-locked-h';
    sep.textContent = `Domains with too few questions to drill (${locked.length}):`;
    grid.appendChild(sep);

    locked.forEach(([domain, qs]) => {
      const pill = document.createElement('div');
      pill.className = 'topic-pill locked';
      pill.innerHTML = `
        <span class="topic-pill-name">${domain}</span>
        <span class="topic-pill-count">${qs.length} Q · unlocks at 3+</span>
      `;
      grid.appendChild(pill);
    });
  }
}

// ============== QUIZ ENGINE ==============
function startQuiz(mode) {
  state.currentMode = mode;
  const all = QUESTION_BANK[state.currentTest.id] || [];

  let pool;
  if (mode === 'full') {
    pool = shuffle(all);
    const minutesPerQ = state.currentTest.id === 'regents-algebra1' ? 2.5 : 1.5;
    state.timeLimitSec = Math.ceil(pool.length * minutesPerQ * 60);
  } else if (mode === 'drill') {
    pool = shuffle(all.filter(q => broadTopic(q.topic) === state.currentTopic));
    state.timeLimitSec = null; // untimed drills
  } else { // quick
    pool = shuffle(all).slice(0, Math.min(10, all.length));
    state.timeLimitSec = 5 * 60;
  }

  if (pool.length === 0) {
    alert('No questions available for this selection.');
    return;
  }

  state.questions = pool;
  state.answers = new Array(pool.length).fill(null);
  state.qIndex = 0;
  state.startedAt = Date.now();

  $('#quiz-test-name').textContent = state.currentTest.name +
    (mode === 'drill' ? ` — ${state.currentTopic}` : mode === 'quick' ? ' — Quick 10' : ' — Full Test');

  startTimer();
  renderQuestion();
  show('view-quiz');
}

function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  const tick = () => {
    const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
    let display, warn = false;
    if (state.timeLimitSec) {
      const remaining = state.timeLimitSec - elapsed;
      if (remaining <= 0) {
        $('#quiz-timer').textContent = '00:00';
        clearInterval(state.timerInterval);
        finishQuiz(true);
        return;
      }
      display = fmtTime(remaining);
      if (remaining < 60) warn = true;
    } else {
      display = fmtTime(elapsed);
    }
    $('#quiz-timer').textContent = display;
    $('#quiz-timer').classList.toggle('warning', warn);
  };
  tick();
  state.timerInterval = setInterval(tick, 1000);
}

function renderQuestion() {
  const q = state.questions[state.qIndex];
  const total = state.questions.length;

  $('#quiz-progress').textContent = `${state.qIndex + 1} / ${total}`;
  $('#progress-fill').style.width = `${((state.qIndex + 1) / total) * 100}%`;
  $('#q-topic').textContent = q.topic;
  $('#q-text').textContent = q.q;
  $('#q-passage').textContent = q.passage || '';
  $('#q-source').textContent = q.source || '';

  const choicesEl = $('#q-choices');
  choicesEl.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.choices.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    if (state.answers[state.qIndex] === i) btn.classList.add('selected');
    btn.innerHTML = `
      <span class="choice-letter">${letters[i]}</span>
      <span class="choice-text">${c}</span>
    `;
    btn.addEventListener('click', () => {
      state.answers[state.qIndex] = i;
      renderQuestion();
    });
    choicesEl.appendChild(btn);
  });

  // Flag button state
  const flagBtn = $('#flag-btn');
  const isFlagged = getFlagged().some(f => f.questionId === q.id);
  flagBtn.classList.toggle('flagged', isFlagged);
  flagBtn.textContent = isFlagged ? '⚑ Reported · click to unflag' : '⚑ Report this question';

  $('#prev-btn').disabled = state.qIndex === 0;
  const isLast = state.qIndex === total - 1;
  $('#next-btn').classList.toggle('hidden', isLast);
  $('#submit-btn').classList.toggle('hidden', !isLast);
}

$('#prev-btn').addEventListener('click', () => {
  if (state.qIndex > 0) { state.qIndex--; renderQuestion(); }
});

$('#next-btn').addEventListener('click', () => {
  if (state.qIndex < state.questions.length - 1) {
    state.qIndex++;
    renderQuestion();
  }
});

$('#submit-btn').addEventListener('click', () => {
  const unanswered = state.answers.filter(a => a === null).length;
  if (unanswered > 0) {
    if (!confirm(`You have ${unanswered} unanswered question${unanswered===1?'':'s'}. Submit anyway?`)) return;
  }
  finishQuiz(false);
});

$('#quit-btn').addEventListener('click', () => {
  if (confirm('Quit this test? Your progress will not be saved.')) {
    if (state.timerInterval) clearInterval(state.timerInterval);
    show('view-home');
    renderHome();
  }
});

$('#flag-btn').addEventListener('click', () => {
  const q = state.questions[state.qIndex];
  const flagged = getFlagged();
  const existing = flagged.findIndex(f => f.questionId === q.id);
  if (existing >= 0) {
    flagged.splice(existing, 1);
  } else {
    flagged.unshift({
      questionId: q.id,
      testId: state.currentTest.id,
      source: q.source,
      q: q.q,
      flaggedAt: Date.now()
    });
  }
  saveFlagged(flagged);
  renderQuestion();
});

// ============== RESULTS ==============
function finishQuiz(timedOut) {
  if (state.timerInterval) clearInterval(state.timerInterval);
  const elapsedSec = Math.floor((Date.now() - state.startedAt) / 1000);

  const detail = state.questions.map((q, i) => ({
    id: q.id,
    topic: q.topic,
    source: q.source,
    q: q.q,
    passage: q.passage || null,
    choices: q.choices,
    correct: q.answer,
    chosen: state.answers[i],
    explain: q.explain,
    isCorrect: state.answers[i] === q.answer,
    skipped: state.answers[i] === null
  }));

  const correct = detail.filter(d => d.isCorrect).length;
  const total = detail.length;
  const pct = Math.round((correct / total) * 100);
  const grade = computeGrade(pct);

  const topicScores = {};
  detail.forEach(d => {
    if (!topicScores[d.topic]) topicScores[d.topic] = { correct: 0, total: 0 };
    topicScores[d.topic].total++;
    if (d.isCorrect) topicScores[d.topic].correct++;
  });

  const entry = {
    completedAt: Date.now(),
    testId: state.currentTest.id,
    testName: state.currentTest.name,
    mode: state.currentMode,
    topic: state.currentTopic || null,
    correct, total, pct, grade,
    elapsedSec,
    timedOut,
    topicScores,
    detail
  };

  saveHistory(entry);
  renderResults(entry);
  show('view-results');
}

function computeGrade(pct) {
  // NY Regents passing is 65%; aligned to standard letter grade scale
  if (pct >= 93) return 'A';
  if (pct >= 90) return 'A−';
  if (pct >= 87) return 'B+';
  if (pct >= 83) return 'B';
  if (pct >= 80) return 'B−';
  if (pct >= 77) return 'C+';
  if (pct >= 73) return 'C';
  if (pct >= 70) return 'C−';
  if (pct >= 65) return 'D';  // Regents passing
  return 'F';
}

function renderResults(entry) {
  $('#score-grade').textContent = entry.grade;
  $('#score-pct').textContent = `${entry.pct}%`;
  $('#score-fraction').textContent = `${entry.correct} of ${entry.total} correct`;
  $('#score-time').textContent = `Time: ${fmtTime(entry.elapsedSec)}${entry.timedOut ? ' (timed out)' : ''}`;

  const tb = $('#topic-breakdown');
  tb.innerHTML = '';
  Object.entries(entry.topicScores).forEach(([topic, s]) => {
    const pct = Math.round((s.correct / s.total) * 100);
    const fillClass = pct >= 80 ? '' : pct >= 60 ? 'mid' : 'low';
    const div = document.createElement('div');
    div.className = 'topic-stat';
    div.innerHTML = `
      <div class="topic-stat-name">${topic}</div>
      <div class="topic-stat-bar"><div class="topic-stat-fill ${fillClass}" style="width:${pct}%"></div></div>
      <div class="topic-stat-pct">${s.correct}/${s.total} · ${pct}%</div>
    `;
    tb.appendChild(div);
  });

  const rl = $('#review-list');
  rl.innerHTML = '';
  const letters = ['A','B','C','D'];
  entry.detail.forEach((d, i) => {
    const status = d.skipped ? 'skipped' : (d.isCorrect ? 'correct' : 'incorrect');
    const item = document.createElement('div');
    item.className = `review-item ${status === 'correct' ? '' : status}`;
    const chosenText = d.chosen !== null ? `${letters[d.chosen]} — ${d.choices[d.chosen]}` : '— Not answered —';
    item.innerHTML = `
      <div class="review-head">
        <span class="review-num">Q${i + 1} · ${d.topic}</span>
        <span class="review-status ${status}">${status}</span>
      </div>
      ${d.passage ? `<div class="q-passage" style="margin-bottom:14px;">${d.passage}</div>` : ''}
      <div class="review-q">${d.q}</div>
      <div class="review-answers">
        <div class="review-answer-block">
          <div class="review-answer-label">Your answer</div>
          <div class="review-answer-text">${chosenText}</div>
        </div>
        <div class="review-answer-block">
          <div class="review-answer-label">Correct answer</div>
          <div class="review-answer-text">${letters[d.correct]} — ${d.choices[d.correct]}</div>
        </div>
      </div>
      <div class="review-explain">${d.explain}</div>
      ${d.source ? `<div class="review-source">Source · ${d.source}</div>` : ''}
    `;
    rl.appendChild(item);
  });
}

$('#retry-btn').addEventListener('click', () => {
  if (state.currentMode && state.currentTest) startQuiz(state.currentMode);
});

// ============== HISTORY ==============
function renderHistory() {
  const h = getHistory();
  const list = $('#history-list');
  list.innerHTML = '';
  if (h.length === 0) {
    list.innerHTML = `<div class="empty-state">No tests yet. Start your first quiz from the home page.</div>`;
    return;
  }
  h.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
      <div>
        <div class="history-test-name">${entry.testName}${entry.topic ? ` — ${entry.topic}` : ''}</div>
        <div class="history-meta">${fmtDate(entry.completedAt)} · ${entry.mode.toUpperCase()} · ${fmtTime(entry.elapsedSec)}</div>
      </div>
      <div class="history-score">${entry.pct}%</div>
      <div class="score-grade" style="font-size:32px;">${entry.grade}</div>
    `;
    list.appendChild(div);
  });
}

// ============== STATS ==============
function renderStats() {
  const h = getHistory();
  const c = $('#stats-content');
  if (h.length === 0) {
    c.innerHTML = `<div class="empty-state">Take a few tests, then come back to see your stats.</div>`;
    renderFlagged();
    return;
  }

  const totalTests = h.length;
  const totalQuestions = h.reduce((sum, e) => sum + e.total, 0);
  const totalCorrect = h.reduce((sum, e) => sum + e.correct, 0);
  const avgPct = Math.round((totalCorrect / totalQuestions) * 100);
  const totalTime = h.reduce((sum, e) => sum + e.elapsedSec, 0);

  const topicAgg = {};
  h.forEach(e => {
    Object.entries(e.topicScores).forEach(([t, s]) => {
      const domain = broadTopic(t);
      if (!topicAgg[domain]) topicAgg[domain] = { correct: 0, total: 0 };
      topicAgg[domain].correct += s.correct;
      topicAgg[domain].total += s.total;
    });
  });
  const topicList = Object.entries(topicAgg)
    .map(([t, s]) => ({ topic: t, pct: Math.round((s.correct / s.total) * 100), correct: s.correct, total: s.total }))
    .sort((a,b) => a.pct - b.pct);

  const weakest = topicList.slice(0, 5);
  const strongest = [...topicList].reverse().slice(0, 5);

  c.innerHTML = `
    <div class="stats-summary">
      <div class="stat-card">
        <div class="stat-num">${totalTests}</div>
        <div class="stat-label">Tests taken</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${totalQuestions}</div>
        <div class="stat-label">Questions answered</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${avgPct}%</div>
        <div class="stat-label">Overall accuracy</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${Math.floor(totalTime / 60)}</div>
        <div class="stat-label">Minutes studied</div>
      </div>
    </div>

    <div class="weak-section">
      <div class="weak-h">Weakest topics — focus your drills here</div>
      ${weakest.map(t => `
        <div class="topic-stat" style="margin-bottom:8px;">
          <div class="topic-stat-name">${t.topic}</div>
          <div class="topic-stat-bar"><div class="topic-stat-fill ${t.pct >= 80 ? '' : t.pct >= 60 ? 'mid' : 'low'}" style="width:${t.pct}%"></div></div>
          <div class="topic-stat-pct">${t.correct}/${t.total} · ${t.pct}%</div>
        </div>
      `).join('')}
    </div>

    <div class="weak-section">
      <div class="weak-h">Strongest topics</div>
      ${strongest.map(t => `
        <div class="topic-stat" style="margin-bottom:8px;">
          <div class="topic-stat-name">${t.topic}</div>
          <div class="topic-stat-bar"><div class="topic-stat-fill" style="width:${t.pct}%"></div></div>
          <div class="topic-stat-pct">${t.correct}/${t.total} · ${t.pct}%</div>
        </div>
      `).join('')}
    </div>
  `;
  renderFlagged();
}

function renderFlagged() {
  const flagged = getFlagged();
  const section = $('#flagged-section');
  const list = $('#flagged-list');
  if (flagged.length === 0) {
    section.classList.add('hidden');
    return;
  }
  section.classList.remove('hidden');
  list.innerHTML = flagged.map(f => `
    <div class="flagged-q">
      <div class="flagged-q-source">${f.source || f.testId}</div>
      <div class="flagged-q-text">${f.q.length > 200 ? f.q.substring(0, 200) + '…' : f.q}</div>
    </div>
  `).join('');
}

$('#clear-flags-btn').addEventListener('click', () => {
  if (confirm('Clear all flagged questions?')) {
    saveFlagged([]);
    renderFlagged();
  }
});

// ============== NAVIGATION ==============
document.addEventListener('click', e => {
  const target = e.target.closest('[data-view]');
  if (!target) return;
  const v = target.dataset.view;
  if (v === 'view-home') renderHome();
  if (v === 'view-history') renderHistory();
  if (v === 'view-stats') renderStats();
  show(v);
});

// ============== INIT ==============
renderHome();
