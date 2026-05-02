# Marko's Prep Desk

A focused test-prep website for Marko (9th grade) — built around verified, cited, drillable content.

## What's inside (v3)

**Total: 75 verified questions across 3 official released NY Regents exams.**

- **Regents — Algebra I (41 questions)** — January 2024 + June 2024 exams
- **Regents — Living Environment (34 questions)** — June 2024 exam
- **SSAT — Upper Level** — info-only page with links to official prep resources (no AI-generated questions; see "Why no SSAT questions" below)

Every question shows its source citation directly under the question ("Algebra I Regents · June 2024 · Q5"), and Marko can click "⚑ Report this question" if anything looks wrong — flagged questions appear on the Stats page.

## Drillable domains

Topic Drill mode unlocks for any domain with 3+ questions in the bank. Currently:

**Algebra I (6 drillable):**
- Functions (10 Q)
- Polynomials (8 Q)
- Equations & Inequalities (8 Q)
- Exponentials & Exponent Rules (5 Q)
- Sequences (3 Q)
- Quadratics (3 Q)

**Living Environment (5 drillable):**
- Genetics & Reproduction (9 Q)
- Ecology (9 Q)
- Cells & Cellular Processes (7 Q)
- Human Body Systems (5 Q)
- Evolution (3 Q)

A few smaller domains (Statistics, Scientific Method, Number Sense) are locked until the bank grows; they're shown but greyed out.

## Sources

All Regents questions come from publicly released exams published by the New York State Education Department:

- Exam PDFs: nysedregents.org/algebraone/ and nysedregents.org/livingenvironment/
- Official scoring keys: included with each exam
- **Every question's marked answer has been cross-checked against the official scoring key.** 75 of 75 verified.

## Why no SSAT questions

Unlike the NY Regents (free, public domain), official SSAT questions are owned by the Enrollment Management Association (EMA) and are **copyrighted**. They cost $80/year for online practice or are sold in printed Guide Books.

Rather than show AI-generated or scraped SSAT questions — which could be wrong, off-style, or violate copyright — the SSAT page is information-only with direct links to the legitimate sources at ssat.org.

## Features

- **Three quiz modes**: Full Practice Test (timed), Topic Drill (untimed, focused on one domain), Quick 10 (5-min warmup)
- **Source citation** on every question — links to the original PDF
- **Report button** — Marko flags suspect questions, you review them on Stats page
- **Streak counter** — daily-use motivation
- **History & Stats** — accuracy by domain, weakest/strongest areas
- **Regents-aligned grading** — 65% = passing, matching the actual Regents scale
- **No ads, no signup, no tracking** — runs fully on Marko's device

## How to deploy on GitHub Pages

1. Create a GitHub repository (e.g. `marko-prep`)
2. Upload the contents of this folder to the repo
3. Settings → Pages → deploy from `main` branch, root folder
4. Visit `https://<username>.github.io/marko-prep/`

No build step. Pure HTML/CSS/JS.

## How to add more verified questions

The pipeline is reproducible:

1. Pick an exam from nysedregents.org (Algebra I or Living Environment)
2. Open `data/questions.js`
3. Add each multiple-choice question with this structure:
   ```js
   { id: "alg-jun23-1",
     topic: "Functions: Modeling",   // narrow label, will auto-map to broad domain
     source: "Algebra I Regents · June 2023 · Q1",
     q: "Question text…",
     choices: ["A", "B", "C", "D"],
     answer: 2,                       // 0-indexed: 2 means C
     explain: "Reasoning. Official answer: (3)." }
   ```
4. **Cross-check every answer against the official scoring key PDF before committing.** A Node.js validation snippet exists in this conversation history.

If a topic label is new, add it to `TOPIC_DOMAIN` in `js/app.js` (top of file) so it groups correctly for drilling.

### Recommended next exams to add

- Algebra I: August 2024, June 2023, January 2023 (each adds ~24 questions)
- Living Environment: January 2024, August 2023, June 2023 (each adds ~30 questions)

Three more exams in each subject would bring the bank to ~140 Algebra and ~120 Living Env questions — enough that retries don't feel like memorization.

## Skipped questions

Some questions in the original exams reference graphs, diagrams, or images that can't be reliably reproduced in text-only form. These were **omitted** rather than misrepresented:

- Algebra I Jan 2024: Q11 (multi-form comparison), Q21 (factoring with potentially ambiguous transcription)
- Algebra I June 2024: Q13 (box plot), Q14 (mixed function representations), Q16 (dot plot), Q18 (graph), Q20 (graph)
- Living Environment June 2024: Q31 (data table needed), Q33-36, Q38, Q39, Q42, Q43 (figures/passage-dependent)

For full Regents practice — including constructed-response (Part II/III/IV) — Marko should also work directly through the original PDFs, which are linked from each question's source citation.

## File structure

```
marko-prep/
├── index.html          # All views (home, test detail, quiz, results, history, stats)
├── css/styles.css      # Academic-editorial design (Fraunces serif + Inter sans)
├── js/app.js           # Quiz engine, topic mapping, state, localStorage
├── data/questions.js   # Test definitions + verified question bank
└── README.md
```

## Philosophy

The site started with AI-generated questions. They had errors. We threw them out and rebuilt around verified content only. The motto: **no hallucinations, just school work based on real resources.**

Real Regents exams are the gold standard for Regents prep. Anything else is a guess.
