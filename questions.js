/* ============================================================
   QUESTION BANK — VERIFIED SOURCES ONLY
   
   Every question in this file is transcribed from a publicly
   released NY State Regents Examination, with the official
   answer key from nysedregents.org.
   
   NO AI-generated content. Every question cites its source.
   ============================================================ */

window.TESTS = [
  {
    id: "regents-algebra1",
    name: "Regents — Algebra I",
    sub: "NY State · 9th-Grade Math Regents",
    color: "#2c5f7c",
    description: "Real questions transcribed from past NY State Algebra I Regents exams. Every question shows its source (date and question number) so Marko can verify against the original PDF.",
    sourceNote: "Currently includes: January 2024 + June 2024 exams. More to be added.",
    isInfoOnly: false
  },
  {
    id: "regents-livingenv",
    name: "Regents — Living Environment",
    sub: "NY State · 9th-Grade Biology Regents",
    color: "#3f6b3a",
    description: "Real questions transcribed from past NY State Living Environment Regents exams. Topics covered: cells, genetics, evolution, ecology, body systems, homeostasis.",
    sourceNote: "Currently includes: June 2024 exam. More to be added.",
    isInfoOnly: false
  },
  {
    id: "ssat-info",
    name: "SSAT — Upper Level",
    sub: "Private School Admissions",
    color: "#a02c1a",
    description: "Important note: unlike NY Regents, official SSAT questions are copyrighted and not free to redistribute. To prep with real SSAT questions, use official materials from the test maker.",
    sourceNote: "See the SSAT page for direct links to official prep resources.",
    isInfoOnly: true
  }
];

window.QUESTION_BANK = {

  // ====================================================================
  // ALGEBRA I REGENTS — January 2024
  // Source PDF: https://www.nysedregents.org/algebraone/124/algone12024-exam.pdf
  // Answer Key: https://www.nysedregents.org/algebraone/124/algone12024-sk.pdf
  // ====================================================================
  "regents-algebra1": [

    { id: "alg-jan24-1", topic: "Functions: Interpreting Graphs",
      source: "Algebra I Regents · January 2024 · Q1",
      q: "A graph represents a dog walker's speed during his 30-minute walk around the neighborhood. The graph shows speed at 0 mph from minutes 12 to 18. Which statement best describes what the dog walker was doing during the 12–18 minute interval of his walk?",
      choices: [
        "He was walking at a constant rate.",
        "He was increasing his speed.",
        "He was decreasing his speed.",
        "He was standing still."
      ],
      answer: 3,
      explain: "When speed equals 0 mph, the walker is not moving. A flat line at zero on a speed-vs-time graph means standing still. (A flat line at a non-zero value would mean constant rate.) Official answer: (4)." },

    { id: "alg-jan24-2", topic: "Functions: Definitions",
      source: "Algebra I Regents · January 2024 · Q2",
      q: "Given the relation: {(0,4), (2,6), (4,8), (x,7)}. Which value of x will make this relation a function?",
      choices: ["0", "2", "6", "4"],
      answer: 2,
      explain: "A relation is a function only if every x-input maps to exactly one y-output. The relation already uses x = 0, 2, and 4. To stay a function, x cannot repeat — so x must be 6. Official answer: (3)." },

    { id: "alg-jan24-3", topic: "Functions: Modeling",
      source: "Algebra I Regents · January 2024 · Q3",
      q: "The Speedy Jet Ski Rental Company charges an insurance fee and an hourly rental rate. The total cost is modeled by R(x) = 30 + 40x. Which statements are true? I. R(x) represents the total cost. II. x is the number of hours rented. III. $40 is the insurance fee. IV. $30 is the hourly rental rate.",
      choices: [
        "I, only",
        "I and II, only",
        "I, III, and IV, only",
        "I, II, III, and IV"
      ],
      answer: 1,
      explain: "In R(x) = 30 + 40x: 30 is the constant (one-time insurance fee), and 40 is multiplied by hours x (so $40 is the hourly rate). III and IV swap these and are false. Only I and II are correct. Official answer: (2)." },

    { id: "alg-jan24-4", topic: "Sequences",
      source: "Algebra I Regents · January 2024 · Q4",
      q: "The eleventh term of the sequence 3, −6, 12, −24, … is",
      choices: ["−3072", "−6144", "3072", "6144"],
      answer: 2,
      explain: "Geometric sequence: a₁ = 3, common ratio r = −2. Formula: aₙ = a₁ · r^(n−1). So a₁₁ = 3 · (−2)¹⁰ = 3 · 1024 = 3072. Note: (−2)¹⁰ is positive (even exponent). Official answer: (3)." },

    { id: "alg-jan24-5", topic: "Exponential Functions",
      source: "Algebra I Regents · January 2024 · Q5",
      q: "Which situation represents exponential growth?",
      choices: [
        "Aidan adds $10 to a jar each week.",
        "A pine tree grows 1.5 feet per year.",
        "Ella earns $20 per hour babysitting.",
        "The number of people majoring in computer science doubles every 5 years."
      ],
      answer: 3,
      explain: "Exponential growth: a quantity is multiplied by a constant factor each period. A, B, C all describe linear growth (adding a fixed amount each period). D describes doubling (×2 each period) — that's exponential. Official answer: (4)." },

    { id: "alg-jan24-6", topic: "Polynomials",
      source: "Algebra I Regents · January 2024 · Q6",
      q: "The expression (2x² + 3x − 7) − (4x² + 5x − 2) is equivalent to",
      choices: [
        "−2x² − 2x − 9",
        "−2x² − 2x − 5",
        "−2x² + 8x − 9",
        "−2x² + 8x − 5"
      ],
      answer: 1,
      explain: "Distribute the minus sign: 2x² + 3x − 7 − 4x² − 5x + 2. Combine like terms: (2x² − 4x²) + (3x − 5x) + (−7 + 2) = −2x² − 2x − 5. Official answer: (2)." },

    { id: "alg-jan24-7", topic: "Function Transformations",
      source: "Algebra I Regents · January 2024 · Q7",
      q: "If f(x) = x², which function is the result of shifting f(x) 3 units left and 2 units down?",
      choices: [
        "g(x) = (x + 2)² − 3",
        "h(x) = (x − 2)² + 3",
        "j(x) = (x + 3)² − 2",
        "k(x) = (x − 3)² + 2"
      ],
      answer: 2,
      explain: "Shift LEFT by 3: replace x with (x + 3) — note the counterintuitive sign. Shift DOWN by 2: subtract 2 outside. Result: (x + 3)² − 2. Official answer: (3)." },

    { id: "alg-jan24-8", topic: "Solving Literal Equations",
      source: "Algebra I Regents · January 2024 · Q8",
      q: "An equation used to find the velocity of an object is v² = u² + 2as, where u is initial velocity, v is final velocity, a is acceleration, s is distance. When solved for a, the result is",
      choices: [
        "a = (v² · u²) / (2s)",
        "a = (v² − u²) / (2s)",
        "a = v² − u² − 2s",
        "a = 2s(v² − u²)"
      ],
      answer: 1,
      explain: "Subtract u² from both sides: v² − u² = 2as. Divide by 2s: a = (v² − u²) / (2s). Official answer: (2)." },

    { id: "alg-jan24-9", topic: "Statistics: Two-Way Tables",
      source: "Algebra I Regents · January 2024 · Q9",
      q: "A class surveyed students about ice cream. Juniors: 42 chocolate, 27 vanilla, 45 twist. Seniors: 67 chocolate, 42 vanilla, 21 twist. Of the students who preferred chocolate, approximately what percentage were seniors?",
      choices: ["27.5", "44.7", "51.5", "61.5"],
      answer: 3,
      explain: "Total chocolate = 42 + 67 = 109. Seniors who chose chocolate = 67. Percentage = 67/109 ≈ 0.6147 = 61.5%. Official answer: (4)." },

    { id: "alg-jan24-10", topic: "Function Evaluation",
      source: "Algebra I Regents · January 2024 · Q10",
      q: "If f(x) = x² + 2x + 1 and g(x) = 3x + 5, then what is the value of f(1) − g(3)?",
      choices: ["10", "8", "−10", "−8"],
      answer: 2,
      explain: "f(1) = 1 + 2 + 1 = 4. g(3) = 9 + 5 = 14. f(1) − g(3) = 4 − 14 = −10. Official answer: (3)." },

    // Q11 omitted — the original question references a graph image
    // that cannot be reliably reproduced in text form. Marko should
    // refer to the original PDF for this question if needed.

    { id: "alg-jan24-12", topic: "Inequalities: Modeling",
      source: "Algebra I Regents · January 2024 · Q12",
      q: "Plan A: $15 monthly fee + $0.08 per text. Plan B: $3 monthly fee + $0.12 per text. If t = number of texts, which inequality shows that Plan A's cost is less than Plan B's?",
      choices: [
        "15 + 0.08t < 3 + 0.12t",
        "15 + 0.08t > 3 + 0.12t",
        "15t + 0.08 < 3t + 0.12",
        "15t + 0.08 > 3t + 0.12"
      ],
      answer: 0,
      explain: "Plan A cost = 15 + 0.08t; Plan B cost = 3 + 0.12t. 'A less than B' means Plan A < Plan B: 15 + 0.08t < 3 + 0.12t. Official answer: (1)." },

    { id: "alg-jan24-13", topic: "Quadratics: Axis of Symmetry",
      source: "Algebra I Regents · January 2024 · Q13",
      q: "A parabola f(x) is graphed with its vertex at x = −1. What is the equation of the axis of symmetry for f(x)?",
      choices: ["x = −1", "x = −3", "y = −1", "y = −3"],
      answer: 0,
      explain: "The axis of symmetry of a parabola is a VERTICAL line through its vertex, written as x = (constant). The vertex is at x = −1, so axis is x = −1. (y = ... describes a horizontal line.) Official answer: (1)." },

    { id: "alg-jan24-14", topic: "Polynomials: Degree",
      source: "Algebra I Regents · January 2024 · Q14",
      q: "What is the degree of the polynomial 5x − 3x² − 1 + 7x³?",
      choices: ["1", "2", "3", "5"],
      answer: 2,
      explain: "Degree = highest exponent on the variable. Terms: 5x (degree 1), −3x² (degree 2), −1 (degree 0), 7x³ (degree 3). Highest is 3. Official answer: (3)." },

    { id: "alg-jan24-15", topic: "Polynomial Multiplication",
      source: "Algebra I Regents · January 2024 · Q15",
      q: "The product of (x² + 3x + 9) and (x − 3) is",
      choices: [
        "x³ − 27",
        "x² + 4x + 6",
        "x³ − 6x² − 18x − 27",
        "−6x⁴ + x³ − 18x² − 27"
      ],
      answer: 0,
      explain: "Distribute: x²(x − 3) + 3x(x − 3) + 9(x − 3) = (x³ − 3x²) + (3x² − 9x) + (9x − 27). Combine: x³ − 27. (Difference of cubes: a³ − b³ = (a − b)(a² + ab + b²).) Official answer: (1)." },

    { id: "alg-jan24-16", topic: "Solving Equations with Fractions",
      source: "Algebra I Regents · January 2024 · Q16",
      q: "The solution to (2/3)(3 − 2x) = 3/4 is",
      choices: ["−11/8", "5/8", "−33/16", "15/16"],
      answer: 3,
      explain: "Multiply both sides by 3/2: 3 − 2x = (3/4)(3/2) = 9/8. Subtract 3 (= 24/8): −2x = 9/8 − 24/8 = −15/8. Divide by −2: x = 15/16. Official answer: (4)." },

    { id: "alg-jan24-17", topic: "Solving f(x) = g(x)",
      source: "Algebra I Regents · January 2024 · Q17",
      q: "If f(x) = 2x + 6 and g(x) = |x| are graphed on the same plane, for which value of x is f(x) = g(x)?",
      choices: ["6", "2", "−2", "−6"],
      answer: 2,
      explain: "Set 2x + 6 = |x|. Test x = −2: f(−2) = −4 + 6 = 2; g(−2) = |−2| = 2. ✓ Equal. (At x = −6, f = −6 but g = 6, not equal.) Official answer: (3)." },

    { id: "alg-jan24-18", topic: "Inequalities",
      source: "Algebra I Regents · January 2024 · Q18",
      q: "What is the solution to the inequality 2x − 7 > 2.5x + 3?",
      choices: ["x > −5", "x < −5", "x > −20", "x < −20"],
      answer: 3,
      explain: "Subtract 2.5x: −0.5x − 7 > 3. Add 7: −0.5x > 10. Divide by −0.5 — KEY RULE: dividing by a negative flips the inequality: x < −20. Official answer: (4)." },

    { id: "alg-jan24-19", topic: "Exponent Rules",
      source: "Algebra I Regents · January 2024 · Q19",
      q: "Which expressions are equivalent to 8x³y⁶? A. (2xy²)³  B. (2x)³y⁶  C. (2x²y²)(4xy³)",
      choices: [
        "A and B, only",
        "B and C, only",
        "A and C, only",
        "A, B, and C"
      ],
      answer: 0,
      explain: "A: (2xy²)³ = 2³x³y⁶ = 8x³y⁶ ✓. B: (2x)³y⁶ = 8x³y⁶ ✓. C: (2x²y²)(4xy³) = 8x³y⁵ — that's y⁵, not y⁶ ✗. Only A and B match. Official answer: (1)." },

    { id: "alg-jan24-20", topic: "Compound Interest",
      source: "Algebra I Regents · January 2024 · Q20",
      q: "Joe deposits $4000 into a CD earning 3% interest, compounded annually. The value in x years can be found using:",
      choices: [
        "f(x) = 4000 + 0.3x",
        "f(x) = 4000 + 0.03x",
        "f(x) = 4000(1.3)ˣ",
        "f(x) = 4000(1.03)ˣ"
      ],
      answer: 3,
      explain: "Compound interest: A = P(1 + r)ᵗ. P = 4000, r = 0.03, so 1 + r = 1.03. Result: 4000(1.03)ˣ. Note: (1.3)ˣ would mean 30%, not 3%. Official answer: (4)." },

    { id: "alg-jan24-22", topic: "Unit Conversions",
      source: "Algebra I Regents · January 2024 · Q22",
      q: "The speed of sound at sea level is 1225 km/hr. Which process correctly converts this speed into feet per second?",
      choices: [
        "(1225 km/hr) × (0.62 mi/km) × (1 hr/60 min) × (1 mi/5280 ft) × (1 min/60 sec)",
        "(1225 km/hr) × (0.62 mi/km) × (5280 ft/mi) × (1 hr/60 min) × (1 min/60 sec)",
        "(1225 km/hr) × (1 km/0.62 mi) × (5280 ft/mi) × (1 hr/60 min) × (1 min/60 sec)",
        "(1225 km/hr) × (0.62 mi/km) × (5280 ft/mi) × (60 min/hr) × (1 min/60 sec)"
      ],
      answer: 1,
      explain: "Track the units. Start: km/hr. ×0.62 mi/km cancels km, leaves mi/hr. ×5280 ft/mi cancels mi, leaves ft/hr. ×(1 hr/60 min) cancels hr, leaves ft/min. ×(1 min/60 sec) cancels min, leaves ft/sec. ✓ Choice (2) is correct. Official answer: (2)." },

    { id: "alg-jan24-23", topic: "Polynomials: Zeros and Factors",
      source: "Algebra I Regents · January 2024 · Q23",
      q: "The zeros of a polynomial function are −2, 4, and 0. What are all the factors of this function?",
      choices: [
        "(x + 2) and (x − 4)",
        "(x − 2) and (x + 4)",
        "x, (x + 2), and (x − 4)",
        "x, (x − 2), and (x + 4)"
      ],
      answer: 2,
      explain: "If r is a zero, (x − r) is a factor. Zeros are −2, 4, 0. Factors: (x − (−2)) = (x + 2); (x − 4); (x − 0) = x. Don't forget the x factor for the zero at 0! Official answer: (3)." },

    { id: "alg-jan24-24", topic: "Quadratics: Range",
      source: "Algebra I Regents · January 2024 · Q24",
      q: "What is the range of the function f(x) = (x − 4)² + 1?",
      choices: ["x > 4", "x ≥ 4", "f(x) > 1", "f(x) ≥ 1"],
      answer: 3,
      explain: "Range = the set of possible OUTPUT values. (x − 4)² ≥ 0 always (a square is never negative). Adding 1: f(x) ≥ 1. The minimum value 1 is reached at x = 4. Note: range is about f(x), NOT x. Official answer: (4)." },

    // ====================================================================
    // ALGEBRA I REGENTS — June 2024
    // Source: https://www.nysedregents.org/algebraone/624/algone62024-exam.pdf
    // Scoring Key: https://www.nysedregents.org/algebraone/624/algone62024-sk.pdf
    // ====================================================================

    { id: "alg-jun24-1", topic: "Quadratics: Interpreting Tables",
      source: "Algebra I Regents · June 2024 · Q1",
      q: "A ball was launched into the air, and its height above the ground was recorded each second: at t=0 height=11 ft; at t=1 height=59; at t=2 height=75; at t=3 height=59; at t=4 height=11. Based on these data, which statement is a valid conclusion?",
      choices: [
        "The ball lands on the ground at 4 seconds.",
        "The ball reaches a maximum height of 11 feet.",
        "The ball was launched from a height of 0 feet.",
        "The ball reaches its maximum height at 2 seconds."
      ],
      answer: 3,
      explain: "Read the table: heights are 11, 59, 75, 59, 11 — the highest value is 75 ft at t=2 sec. The ball is symmetric around t=2. At t=4 it's back at 11 ft (still in the air, not on the ground). It launched FROM 11 ft, not 0 ft. Official answer: (4)." },

    { id: "alg-jun24-2", topic: "Inequalities: Modeling",
      source: "Algebra I Regents · June 2024 · Q2",
      q: "A tour bus seats at most 48 passengers. Adult tickets cost $18, child tickets cost $12. The bus must collect at least $650 to make a profit. If a = adult tickets and c = child tickets, which system models 'making a profit'?",
      choices: [
        "a + c < 48 ; 18a + 12c > 650",
        "a + c ≤ 48 ; 18a + 12c ≥ 650",
        "a + c < 48 ; 18a + 12c < 650",
        "a + c ≤ 48 ; 18a + 12c ≤ 650"
      ],
      answer: 1,
      explain: "'At most 48' means a + c ≤ 48 (≤ includes 48 itself). 'At least $650' means 18a + 12c ≥ 650. Watch for inclusive vs strict inequalities — 'at most' and 'at least' include the boundary. Official answer: (2)." },

    { id: "alg-jun24-3", topic: "Exponent Rules",
      source: "Algebra I Regents · June 2024 · Q3",
      q: "Which equation is always true?",
      choices: [
        "x² · x³ = x⁵",
        "3ˣ · 3² = 9²ˣ",
        "2z² = z²",
        "7ᵃ · 7ᵇ = 7ᵃᵇ"
      ],
      answer: 0,
      explain: "Product of powers rule: when multiplying same bases, ADD exponents. x² · x³ = x^(2+3) = x⁵. ✓ Choice (2) is wrong: 3ˣ · 3² = 3^(x+2), not 9²ˣ. Choice (3) is false: 2z² ≠ z². Choice (4) is wrong: 7ᵃ · 7ᵇ = 7^(a+b), not 7^(ab). Official answer: (1)." },

    { id: "alg-jun24-4", topic: "Polynomials",
      source: "Algebra I Regents · June 2024 · Q4",
      q: "The expression −2(x² − 2x + 1) + (3x² + 3x − 5) is equivalent to",
      choices: [
        "x² + x − 4",
        "x² − x − 7",
        "x² + 7x − 4",
        "x² + 7x − 7"
      ],
      answer: 3,
      explain: "Distribute the −2: −2x² + 4x − 2. Add the second polynomial: (−2x² + 3x²) + (4x + 3x) + (−2 − 5) = x² + 7x − 7. Official answer: (4)." },

    { id: "alg-jun24-5", topic: "Rational/Irrational Numbers",
      source: "Algebra I Regents · June 2024 · Q5",
      q: "Which sum is irrational?",
      choices: [
        "−2√12 + √100",
        "(4/3)² + √900",
        "√25 + ∛64 + 1/2",
        "√49 + 3√121"
      ],
      answer: 0,
      explain: "An irrational + a rational = irrational. (1): √12 is irrational (12 isn't a perfect square), so −2√12 + 10 is irrational. ✓ (2): all rational. (3): √25 = 5, ∛64 = 4, plus 1/2 — all rational. (4): √49 = 7, √121 = 11 — all rational. Official answer: (1)." },

    { id: "alg-jun24-6", topic: "Solving Equations with Fractions",
      source: "Algebra I Regents · June 2024 · Q6",
      q: "The solution to (4(x − 5))/3 + 2 = 14 is",
      choices: ["15", "14", "6", "4"],
      answer: 1,
      explain: "Subtract 2: (4(x − 5))/3 = 12. Multiply by 3: 4(x − 5) = 36. Divide by 4: x − 5 = 9. Add 5: x = 14. Official answer: (2)." },

    { id: "alg-jun24-7", topic: "Exponential Functions",
      source: "Algebra I Regents · June 2024 · Q7",
      q: "On an island, a rare breed of rabbit doubled its population each month for two years. Which type of function best models this increase?",
      choices: ["linear growth", "linear decay", "exponential growth", "exponential decay"],
      answer: 2,
      explain: "Doubling each period (×2 each month) = exponential growth. Linear would mean adding a fixed number each month. Decay means decreasing — populations are increasing here. Official answer: (3)." },

    { id: "alg-jun24-8", topic: "Polynomials: Degree",
      source: "Algebra I Regents · June 2024 · Q8",
      q: "What is the degree of the polynomial 2x − x² + 4x³?",
      choices: ["1", "2", "3", "4"],
      answer: 2,
      explain: "Degree = highest exponent. Terms: 2x (degree 1), −x² (degree 2), 4x³ (degree 3). Highest is 3. Official answer: (3)." },

    { id: "alg-jun24-9", topic: "Polynomials: Zeros",
      source: "Algebra I Regents · June 2024 · Q9",
      q: "The zeros of the function f(x) = x(x − 5)(3x + 6) are",
      choices: [
        "0, −5, and 2",
        "0, 5, and −2",
        "−5 and 2, only",
        "5 and −2, only"
      ],
      answer: 1,
      explain: "Zeros are where f(x) = 0. Set each factor to 0: x = 0; x − 5 = 0 → x = 5; 3x + 6 = 0 → x = −2. So zeros are 0, 5, −2. Don't forget x = 0 — and watch the sign flip: 3x + 6 = 0 gives x = −2, not +2. Official answer: (2)." },

    { id: "alg-jun24-10", topic: "Linear Equations: y-intercept",
      source: "Algebra I Regents · June 2024 · Q10",
      q: "What is the y-intercept of the line that passes through the points (−1, 5) and (2, −1)?",
      choices: ["−1", "−2", "3", "5"],
      answer: 2,
      explain: "First find slope: m = (−1 − 5) / (2 − (−1)) = −6/3 = −2. Use point-slope: y − 5 = −2(x − (−1)) → y = −2x − 2 + 5 = −2x + 3. y-intercept (b) = 3. Official answer: (3)." },

    { id: "alg-jun24-11", topic: "Functions: Comparing Growth",
      source: "Algebra I Regents · June 2024 · Q11",
      q: "Nancy has four salary plans for the next eight years (in thousands of dollars, t = years): a(t) = 2ᵗ + 25; b(t) = 10t + 75; c(t) = 400/t + 80; d(t) = 2(t+1)² − 10t + 50. Which plan gives the highest salary in her 8th year?",
      choices: ["a(t)", "b(t)", "c(t)", "d(t)"],
      answer: 0,
      explain: "Evaluate each at t = 8: a(8) = 2⁸ + 25 = 256 + 25 = 281. b(8) = 80 + 75 = 155. c(8) = 400/8 + 80 = 50 + 80 = 130. d(8) = 2(81) − 80 + 50 = 162 − 30 = 132. Highest is a(t) at 281. Exponential growth crushes linear over enough time. Official answer: (1)." },

    { id: "alg-jun24-12", topic: "Sequences: Geometric",
      source: "Algebra I Regents · June 2024 · Q12",
      q: "The third term in a sequence is 25 and the fifth term is 625. Which number could be the common ratio of the sequence?",
      choices: ["1/5", "5", "125", "25"],
      answer: 1,
      explain: "From term 3 to term 5 is 2 ratio multiplications: a₅ = a₃ · r². 625 = 25 · r². r² = 25. r = ±5. So 5 (or −5) works. Official answer: (2)." },

    { id: "alg-jun24-15", topic: "Sequences: Arithmetic",
      source: "Algebra I Regents · June 2024 · Q15",
      q: "The equation that represents the sequence −2, −5, −8, −11, −14, ... is",
      choices: [
        "aₙ = −3 + (−2)(n − 1)",
        "aₙ = −2 + (−3)(n − 1)",
        "aₙ = 3 + (−2)(n − 1)",
        "aₙ = −2 + (3)(n − 1)"
      ],
      answer: 1,
      explain: "Arithmetic sequence: aₙ = a₁ + d(n − 1). First term a₁ = −2. Common difference d = −5 − (−2) = −3. So aₙ = −2 + (−3)(n − 1). Verify: a₃ = −2 + (−3)(2) = −8. ✓ Official answer: (2)." },

    { id: "alg-jun24-17", topic: "Function Transformations",
      source: "Algebra I Regents · June 2024 · Q17",
      q: "Compare g(x) = 2(x − 3)² to f(x) = x². Which student response is correct?",
      choices: [
        "Ashley said: g(x) is wider and shifted left 3 units.",
        "Beth said: g(x) is narrower and shifted left 3 units.",
        "Carl said: g(x) is wider and shifted right 3 units.",
        "Don said: g(x) is narrower and shifted right 3 units."
      ],
      answer: 3,
      explain: "Two transformations on x²: (1) Coefficient 2 in front makes it NARROWER (|a| > 1 stretches vertically = appears narrower). (2) (x − 3) inside means shift RIGHT 3 units (subtract inside = shift right). Don is correct. Official answer: (4)." },

    { id: "alg-jun24-19", topic: "Polynomial Multiplication",
      source: "Algebra I Regents · June 2024 · Q19",
      q: "Which expression is equivalent to (x − 5)(2x + 7) − (x + 5)?",
      choices: [
        "2x² − 2x − 30",
        "2x² − 2x − 40",
        "2x² − 4x − 30",
        "2x² − 4x − 40"
      ],
      answer: 3,
      explain: "FOIL (x − 5)(2x + 7): 2x² + 7x − 10x − 35 = 2x² − 3x − 35. Subtract (x + 5): 2x² − 3x − 35 − x − 5 = 2x² − 4x − 40. Official answer: (4)." },

    { id: "alg-jun24-21", topic: "Functions: Modeling",
      source: "Algebra I Regents · June 2024 · Q21",
      q: "Nicole charges for babysitting using C(h) = 6h + 5. The constant term (5) represents",
      choices: [
        "the additional charge for gas",
        "the hourly rate Nicole charges",
        "the number of hours Nicole babysits",
        "the total Nicole earns from babysitting"
      ],
      answer: 0,
      explain: "In C(h) = 6h + 5: the coefficient of h ($6) is the hourly rate. The constant term ($5, charged regardless of hours) is the gas charge. Official answer: (1)." },

    { id: "alg-jun24-22", topic: "Solving Literal Equations",
      source: "Algebra I Regents · June 2024 · Q22",
      q: "When solved for x in terms of a, the solution to 3x − 7 = ax + 5 is",
      choices: [
        "12 / (3a)",
        "12 / (3 − a)",
        "(3a) / 12",
        "(3 − a) / 12"
      ],
      answer: 1,
      explain: "Move x terms to one side: 3x − ax = 5 + 7. Factor: x(3 − a) = 12. Divide: x = 12 / (3 − a). Official answer: (2)." },

    { id: "alg-jun24-23", topic: "Unit Conversions",
      source: "Algebra I Regents · June 2024 · Q23",
      q: "Wayde van Niekerk ran 400 meters in 43.03 seconds (a world record). Which calculation gives his average speed in MILES per HOUR?",
      choices: [
        "(400 m / 43.03 sec) × (1000 m / 0.62 mi) × (1 hr / 3600 sec)",
        "(400 m / 43.03 sec) × (0.62 mi / 1000 m) × (1 hr / 3600 sec)",
        "(400 m / 43.03 sec) × (0.62 mi / 1000 m) × (3600 sec / 1 hr)",
        "(400 m / 43.03 sec) × (1000 m / 0.62 mi) × (3600 sec / 1 hr)"
      ],
      answer: 2,
      explain: "Track units. Start: m/sec. Convert m → mi: ×(0.62 mi / 1000 m) cancels meters → leaves mi/sec. Convert sec → hr: need to MULTIPLY by 3600 to convert /sec to /hr (since there are 3600 sec in 1 hr, and we want 'per hour'). So ×(3600 sec / 1 hr) cancels seconds → leaves mi/hr. Official answer: (3)." },

    { id: "alg-jun24-24", topic: "Functions: Domain and Range",
      source: "Algebra I Regents · June 2024 · Q24",
      q: "Which function has a domain of all real numbers AND a range greater than or equal to three?",
      choices: [
        "f(x) = 2x + 3",
        "g(x) = x² + 3",
        "h(x) = 3ˣ",
        "m(x) = |x + 3|"
      ],
      answer: 1,
      explain: "Test each: (1) Linear: range is all reals, not just ≥ 3. (2) g(x) = x² + 3: x² ≥ 0, so output ≥ 3 ✓. Domain is all reals ✓. (3) 3ˣ: range is y > 0, but doesn't include up to 3 only — actually y > 0 means values like 1, which is < 3. (4) |x + 3|: range is ≥ 0, not ≥ 3. Only g(x) satisfies both conditions. Official answer: (2)." }
  ],

  // ====================================================================
  // LIVING ENVIRONMENT REGENTS — June 2024
  // Source: nysedregents.org official released exam
  // ====================================================================
  "regents-livingenv": [

    { id: "le-jun24-1", topic: "Cells: Organelles",
      source: "Living Environment Regents · June 2024 · Q1",
      q: "In an animal cell, all of the organelles work together to carry out",
      choices: ["photosynthesis", "diffusion", "metabolic processes", "information storage"],
      answer: 2,
      explain: "Organelles each have specialized roles, but together they carry out the cell's metabolic processes — all the chemical reactions of life. Photosynthesis happens only in plant chloroplasts. Diffusion is one process. Information storage is just the nucleus's job. Official answer: (3)." },

    { id: "le-jun24-2", topic: "Reproduction: Asexual",
      source: "Living Environment Regents · June 2024 · Q2",
      q: "A colony of 47,000 quaking aspen trees, all connected by one root system, is considered to be Earth's most massive organism. When the trees are stressed, shoots are sent out from the roots and develop into new trees. Every new tree in this colony would contain",
      choices: [
        "the same genetic information, because it is produced asexually",
        "the same genetic information, because it is produced sexually",
        "less genetic material, since it is produced from root cells",
        "a different combination of genes, since it is produced from various roots"
      ],
      answer: 0,
      explain: "Sending up shoots from a root system is asexual reproduction — the new trees are clones. Asexual reproduction (no fusion of gametes) produces offspring with identical DNA. Official answer: (1)." },

    { id: "le-jun24-3", topic: "Cells: Receptors",
      source: "Living Environment Regents · June 2024 · Q3",
      q: "Tissues in the center area of the prostate respond to testosterone; tissues in the outer area respond to estrogen. The cells of these two regions differ in that",
      choices: [
        "cells in the center area produce more estrogen than cells in the outer area",
        "cells in the outer area have many testosterone receptors",
        "they contain different receptors on their cell membranes",
        "they contain different DNA sequences for the production of hormones"
      ],
      answer: 2,
      explain: "Different cells respond to different hormones because they have different RECEPTOR PROTEINS on their membranes. A hormone only affects a cell with matching receptors. The DNA itself is the same in all body cells — what differs is which genes are expressed. Official answer: (3)." },

    { id: "le-jun24-4", topic: "Ecology: Biodiversity & Stability",
      source: "Living Environment Regents · June 2024 · Q4",
      q: "An energy transfer diagram shows: Grasses feed Rabbits, Beetles, Slugs, and Mice; these in turn feed Hawks, Foxes, Badgers, Hedgehogs, and Small birds. Which statement about this ecosystem is correct?",
      choices: [
        "A reduction in the number of species present would most likely upset the stability of this ecosystem.",
        "This ecosystem would not be affected if decomposers did not perform their function.",
        "This ecosystem lacks producer organisms.",
        "There are most likely more foxes than rabbits in this ecosystem."
      ],
      answer: 0,
      explain: "Biodiversity = stability. Losing species disrupts food webs. Decomposers ARE essential (they recycle nutrients). Grasses ARE producers. Energy pyramids show MORE prey than predators (more rabbits than foxes). Official answer: (1)." },

    { id: "le-jun24-5", topic: "Cells: Differentiation",
      source: "Living Environment Regents · June 2024 · Q5",
      q: "The process of differentiation occurs when",
      choices: [
        "two different cells, a sperm cell and an egg cell, combine to produce a zygote",
        "different zygotes are formed each time that an egg and sperm unite",
        "different kinds of cells and tissues form during embryonic development",
        "two different sexes are present among the offspring, after sexual reproduction"
      ],
      answer: 2,
      explain: "Differentiation = the process by which a generic embryonic cell becomes a specialized cell type (nerve, muscle, skin). All cells have the same DNA, but different genes are activated. Official answer: (3)." },

    { id: "le-jun24-6", topic: "Body Systems: Working Together",
      source: "Living Environment Regents · June 2024 · Q6",
      q: "Which two human systems work together to provide glucose for the cells of the body?",
      choices: [
        "nervous and reproductive systems",
        "nervous and respiratory systems",
        "circulatory and digestive systems",
        "circulatory and respiratory systems"
      ],
      answer: 2,
      explain: "Glucose comes from the digestive system (breaking down food). The circulatory system (blood) transports glucose to every cell. The respiratory system delivers oxygen, not glucose. Official answer: (3)." },

    { id: "le-jun24-7", topic: "Levels of Organization",
      source: "Living Environment Regents · June 2024 · Q7",
      q: "In a multicellular organism, which type of structures would be MOST numerous?",
      choices: ["organs", "tissues", "organelles", "cells"],
      answer: 2,
      explain: "Hierarchy from smallest/most numerous to largest: organelles → cells → tissues → organs → systems. Each cell has many organelles, so organelles are most numerous. Official answer: (3)." },

    { id: "le-jun24-8", topic: "Reproduction: Hormones",
      source: "Living Environment Regents · June 2024 · Q8",
      q: "Dioxin, a toxin associated with waste incineration and some plastics, has been found to directly disrupt normal gamete production in human females. Dioxin most likely affects the",
      choices: [
        "testes and progesterone production",
        "ovaries and estrogen production",
        "DNA in the nuclei of sperm cells",
        "pancreas and insulin production"
      ],
      answer: 1,
      explain: "Female gametes (eggs) are produced in the ovaries. The female sex hormone primarily linked to ovarian function is estrogen. Testes/sperm are male; the pancreas/insulin is unrelated to gamete production. Official answer: (2)." },

    { id: "le-jun24-9", topic: "Biotechnology: Genetic Engineering",
      source: "Living Environment Regents · June 2024 · Q9",
      q: "A gene present only in a single plant species was found to regulate protein content. The most likely method scientists would use to incorporate this gene into a variety of food crops is",
      choices: [
        "genetic engineering",
        "selective breeding",
        "sexual reproduction between the plants with this gene and those without it",
        "deletion of the genes that limit protein production from each individual food crop plant"
      ],
      answer: 0,
      explain: "Moving a specific gene from one species to another requires genetic engineering — directly inserting the desired gene into the target organism's DNA. Selective breeding can't easily transfer genes between different species. Official answer: (1)." },

    { id: "le-jun24-10", topic: "Ecology: Food Webs",
      source: "Living Environment Regents · June 2024 · Q10",
      q: "A decrease in predators within an ecosystem would lead to an increase in herbivores. The increase in herbivores would cause a decrease in",
      choices: ["decomposers", "prey", "consumers", "producers"],
      answer: 3,
      explain: "More herbivores = more grazing = fewer plants/producers. Herbivores ARE consumers (so consumers go up overall, not down). Decomposers and prey are unrelated. Official answer: (4)." },

    { id: "le-jun24-11", topic: "Genetics: Inheritance",
      source: "Living Environment Regents · June 2024 · Q11",
      q: "In order for some of the genetic information in a lioness to be present in her cub, the genetic information from the mother must have been",
      choices: [
        "copied and present in the egg cell of the lioness",
        "combined with genetic information from another lioness",
        "contained in half of the DNA found in the sperm cells of the father",
        "able to make enzymes to produce all of the carbohydrates found in the mother"
      ],
      answer: 0,
      explain: "Mother passes DNA to offspring through her egg cell. DNA from her body cells is replicated and packaged into her eggs (via meiosis). Official answer: (1)." },

    { id: "le-jun24-12", topic: "Reproduction: Placenta",
      source: "Living Environment Regents · June 2024 · Q12",
      q: "Which statement best describes a critical function of the placenta?",
      choices: [
        "Meiosis occurs in the placenta, allowing for the development and release of eggs.",
        "Blood from the mother and fetus mixes at the placenta, providing nutrients and oxygen.",
        "The placenta filters out all harmful toxins and chemicals from the mother's blood, so that they cannot reach the fetus.",
        "The exchange of oxygen and carbon dioxide occurs between the mother and developing fetus across the placenta."
      ],
      answer: 3,
      explain: "The placenta enables EXCHANGE (not mixing). Maternal and fetal blood do NOT mix. The placenta does not filter ALL toxins (some pass through). Meiosis happens in ovaries, not the placenta. Official answer: (4)." },

    { id: "le-jun24-13", topic: "Homeostasis",
      source: "Living Environment Regents · June 2024 · Q13",
      q: "Organisms maintain internal stability in a changing environment by making continual adjustments. This process is referred to as",
      choices: ["cellular respiration", "active transport", "natural selection", "dynamic equilibrium"],
      answer: 3,
      explain: "Dynamic equilibrium = homeostasis = the body's continual adjustments to stay stable (like temperature regulation, blood sugar, water balance). Official answer: (4)." },

    { id: "le-jun24-14", topic: "Evolution: Natural Selection",
      source: "Living Environment Regents · June 2024 · Q14",
      q: "A species of octopus lives in the depths of the ocean where oxygen levels are low. These octopuses have specific proteins in their blood that allow for more efficient oxygen transport. Which statement best explains the presence of these proteins?",
      choices: [
        "Migration to warmer and shallower ocean water favored the formation of the specific proteins.",
        "Octopuses that had the specific proteins were able to survive and reproduce in the deep water environment and passed the trait on to future generations.",
        "When some octopuses migrated to a deeper environment, they needed to produce new proteins so that their blood could carry more oxygen.",
        "Mutations occurred in the body cells of the octopuses, which resulted in the specific proteins being produced and passed on to their offspring."
      ],
      answer: 1,
      explain: "Natural selection: variations exist by chance (mutations in gametes); the environment filters them. Octopuses with the helpful protein survived and reproduced more, passing the trait on. Choice (3) is the Lamarckian fallacy — organisms don't 'need' to produce traits. Choice (4) is wrong because mutations in BODY (somatic) cells are NOT inherited; only gamete mutations are. Official answer: (2)." },

    { id: "le-jun24-15", topic: "Levels of Organization",
      source: "Living Environment Regents · June 2024 · Q15",
      q: "Tissue engineering is being developed to use lab-grown tissues to replace damaged human body parts. To build new body parts, scientists would start by",
      choices: [
        "assembling molecules directly into tissues that can make body systems",
        "making organelles and using the organelles to develop organs",
        "engineering body systems in order to develop organelles for transplant",
        "growing cells to develop tissues and then growing these tissues to form an organ"
      ],
      answer: 3,
      explain: "Building biological structures follows the natural hierarchy: cells → tissues → organs → systems. Start with cells, then group them into tissues, then assemble tissues into organs. Official answer: (4)." },

    { id: "le-jun24-16", topic: "Digestion",
      source: "Living Environment Regents · June 2024 · Q16",
      q: "People with cystic fibrosis have decreased levels of some digestive enzymes. They take enzyme supplements to prevent malnutrition. These enzymes are essential because they",
      choices: [
        "break down foods so that nutrients can be absorbed and used",
        "contain vitamins and other nutrients necessary for a healthy diet",
        "allow the person to synthesize large, inorganic nutrient molecules",
        "are the building blocks of carbohydrates and other nutrient molecules"
      ],
      answer: 0,
      explain: "Digestive enzymes break large food molecules (proteins, carbs, fats) into small subunits (amino acids, sugars, fatty acids) so they can be absorbed through intestinal walls. Without enzymes = malnutrition. Official answer: (1)." },

    { id: "le-jun24-17", topic: "Reproduction: Sexual",
      source: "Living Environment Regents · June 2024 · Q17",
      q: "A reproductive cycle shows: Adults produce Eggs and Sperm (process 1), which combine to form Zygotes (process 2), which develop through Growth Stages (process 3) into new Adults. Which statement is correct?",
      choices: [
        "Mutations that occur during processes 1 and 2 will not be passed on to offspring.",
        "Exact copies of the parents are produced, which leads to a stable population.",
        "Sorting and recombining of genes occurs, which leads to new genetic combinations.",
        "The three processes result in offspring with half as much genetic information as the adults."
      ],
      answer: 2,
      explain: "Sexual reproduction shuffles genes via meiosis (independent assortment, crossing over) and combines DNA from two parents at fertilization → genetically unique offspring. Choice (1) is wrong (mutations in gametes ARE inherited). Choice (2) describes asexual reproduction. Choice (4) is wrong because the zygote restores the full chromosome count. Official answer: (3)." },

    { id: "le-jun24-18", topic: "Body Systems: Immune",
      source: "Living Environment Regents · June 2024 · Q18",
      q: "Kidney transplant surgery places a healthy kidney from one person into another. The body often produces substances that work against this transplanted organ. The system most directly involved in attacking the transplanted kidney is the",
      choices: ["excretory system", "nervous system", "circulatory system", "immune system"],
      answer: 3,
      explain: "The immune system identifies 'self' vs 'non-self.' A transplanted organ has different proteins, so the immune system attacks it (rejection). This is why transplant patients take immunosuppressants. Official answer: (4)." },

    { id: "le-jun24-19", topic: "Ecology: Energy Pyramid",
      source: "Living Environment Regents · June 2024 · Q19",
      q: "An energy pyramid for a forest ecosystem has four levels A (bottom) → B → C → D (top). Which set correctly identifies organisms at each level (in order D, C, B, A)?",
      choices: [
        "carnivores, heterotrophs, producers, herbivores",
        "carnivores, carnivores, herbivores, producers",
        "heterotrophs, autotrophs, herbivores, producers",
        "producers, carnivores, herbivores, heterotrophs"
      ],
      answer: 1,
      explain: "Energy pyramids: bottom = producers (plants), then primary consumers (herbivores), then secondary consumers (carnivores), then tertiary consumers (top carnivores). Bottom-up: producers, herbivores, carnivores, carnivores. Read top-down (D→A): carnivores, carnivores, herbivores, producers. Official answer: (2)." },

    { id: "le-jun24-20", topic: "Homeostasis: Feedback",
      source: "Living Environment Regents · June 2024 · Q20",
      q: "A diagram shows: Body temperature gets too low → Blood vessels in skin constrict, reducing heat loss → Muscles begin shivering, generating heat → Body temperature increases. These events are best described as",
      choices: [
        "a feedback mechanism that maintains homeostasis",
        "a cycle that regulates cellular communication",
        "an immune system response to increasing heart rate",
        "a body system regulating hormone production"
      ],
      answer: 0,
      explain: "When the body senses a deviation (too cold) and responds with corrective actions (constriction, shivering) to restore normal temperature — that's a negative feedback loop maintaining homeostasis. Official answer: (1)." },

    { id: "le-jun24-21", topic: "Ecology: Human Impact",
      source: "Living Environment Regents · June 2024 · Q21",
      q: "The World Wildlife Federation reported a 60% decline in monitored wildlife populations in just over 40 years. The most likely factor contributing to this decline was",
      choices: [
        "animals reproducing successfully",
        "the destruction of many natural habitats",
        "passing environmental protection laws",
        "the introduction of native species into habitats"
      ],
      answer: 1,
      explain: "Habitat destruction (deforestation, urbanization, agriculture) is the leading cause of wildlife decline globally. Note: introduction of NATIVE species isn't harmful — INVASIVE (non-native) species are. Official answer: (2)." },

    { id: "le-jun24-22", topic: "Ecology: Abiotic Factors",
      source: "Living Environment Regents · June 2024 · Q22",
      q: "An ecosystem includes deer grazing on grass, predators hunting prey, varied tree species, and a particular soil chemistry. An abiotic factor in this ecosystem is the",
      choices: [
        "pH of the soil where the trees grow",
        "number of deer of reproductive age",
        "different species of grass present",
        "balance between predators and prey"
      ],
      answer: 0,
      explain: "Abiotic = non-living factors (pH, temperature, water, sunlight, soil minerals). Biotic = living things (deer, grass, predator-prey relationships). Soil pH is the only non-living option. Official answer: (1)." },

    { id: "le-jun24-23", topic: "Ecology: Decomposers",
      source: "Living Environment Regents · June 2024 · Q23",
      q: "A student observed owls hunting mice in a field. Some chemicals from the waste products of the owls were made available to be absorbed by the roots of the grasses due to the action of",
      choices: ["autotrophs", "carnivores", "herbivores", "decomposers"],
      answer: 3,
      explain: "Decomposers (bacteria, fungi) break down waste/dead matter into simple inorganic nutrients (nitrogen, phosphorus) that plant roots can absorb. They recycle nutrients in every ecosystem. Official answer: (4)." },

    { id: "le-jun24-24", topic: "Cellular Processes",
      source: "Living Environment Regents · June 2024 · Q24",
      q: "Which two terms are opposite processes?",
      choices: [
        "autotrophic nutrition and photosynthesis",
        "asexual reproduction and cloning",
        "digestion and synthesis",
        "natural selection and evolution"
      ],
      answer: 2,
      explain: "Digestion BREAKS DOWN large molecules; synthesis BUILDS UP large molecules. Opposite processes. The other pairs are nearly synonymous: photosynthesis IS autotrophic nutrition; cloning IS asexual reproduction; natural selection drives evolution. Official answer: (3)." },

    { id: "le-jun24-25", topic: "Ecology: Resource Use",
      source: "Living Environment Regents · June 2024 · Q25",
      q: "Which human activity would most likely deplete finite resources?",
      choices: [
        "recycling of aluminum and paper",
        "protection of wildlife habitats",
        "uncontrolled population growth",
        "regulations that reduce industrial pollution"
      ],
      answer: 2,
      explain: "More people = more demand for finite resources (water, fossil fuels, minerals, land). The other options PRESERVE resources or reduce harm. Uncontrolled growth without sustainability quickly depletes them. Official answer: (3)." },

    { id: "le-jun24-26", topic: "Reproduction: Cloning",
      source: "Living Environment Regents · June 2024 · Q26",
      q: "Macaques normally reproduce sexually, but scientists cloned two baby macaques from a single body cell. These monkeys are genetically",
      choices: [
        "identical to each other, but different from the donor of the body cell",
        "different from each other, but identical to the donor of the body cell",
        "identical to each other and to the donor of the body cell",
        "different from each other and from the donor of the body cell"
      ],
      answer: 2,
      explain: "Cloning from a single body cell produces genetically identical copies of the donor. Both clone monkeys came from the SAME donor cell, so they are identical to each other AND to the donor. Official answer: (3)." },

    { id: "le-jun24-27", topic: "Ecology: Aquatic",
      source: "Living Environment Regents · June 2024 · Q27",
      q: "Which event would most likely be the immediate result of significantly lowering the oxygen concentration in a freshwater lake?",
      choices: [
        "a decrease in the number of fish",
        "an increase in the number of plants",
        "an increase in biodiversity",
        "a decrease in water temperature"
      ],
      answer: 0,
      explain: "Fish breathe dissolved oxygen via gills. Less oxygen → fish die or leave. Low oxygen reduces biodiversity, doesn't increase it. Official answer: (1)." },

    { id: "le-jun24-28", topic: "Biotechnology: GMOs",
      source: "Living Environment Regents · June 2024 · Q28",
      q: "Scientists have modified papayas to be resistant to the papaya ringspot virus and to ripen faster. These modifications",
      choices: [
        "may cause papayas to ripen too slowly, causing loss of revenue",
        "are passed to any organism that eats them, making the organism resistant to the virus",
        "are an example of using agricultural technologies to increase farm yields",
        "could spread ringspot virus throughout the entire ecosystem"
      ],
      answer: 2,
      explain: "Genetic modification of crops for disease resistance and faster growth is a textbook example of agricultural biotechnology to increase farm yields. Eating a GMO does NOT transfer the genes to the eater (B is wrong); the modification doesn't slow ripening (A is opposite); resistance prevents the virus, not spreads it (D is wrong). Official answer: (3)." },

    { id: "le-jun24-29", topic: "Body Systems: Immune (Vaccines)",
      source: "Living Environment Regents · June 2024 · Q29",
      q: "Vaccinated individuals are protected from disease because their bodies have been stimulated to",
      choices: [
        "produce antibodies against specific pathogens",
        "synthesize antigens against harmful microbes",
        "make fewer white blood cells during infection",
        "manufacture more enzymes to react to microbes"
      ],
      answer: 0,
      explain: "Vaccines expose the body to antigens (weakened pathogens or pieces of them). The immune system makes specific ANTIBODIES and 'memory cells.' Note: bodies make antibodies, NOT antigens (those come from pathogens). Official answer: (1)." },

    { id: "le-jun24-30", topic: "Ecology: Invasive Species",
      source: "Living Environment Regents · June 2024 · Q30",
      q: "A species of predatory wasp is introduced to control an insect pest. A possible negative consequence of this action is that the new predatory wasp may",
      choices: [
        "limit the population of the insect pest",
        "prey on beneficial insects",
        "disrupt mineral availability in the ecosystem",
        "cause an increase in pesticide-resistant plants"
      ],
      answer: 1,
      explain: "Biological control sounds clean, but introduced predators rarely eat ONLY the target. They often prey on beneficial insects (pollinators, helpful predators), disrupting the ecosystem. Choice (1) is the GOAL, not a negative consequence. Official answer: (2)." },

    { id: "le-jun24-32", topic: "Scientific Reasoning",
      source: "Living Environment Regents · June 2024 · Q32",
      q: "A data table shows mercury levels are highest in large predatory fish (swordfish 0.995 ppm/oz, mackerel 0.73) and lowest in small species (tilapia 0.013, shrimp 0.009). Which statement is best supported?",
      choices: [
        "Human activities do not affect mercury levels in fish species.",
        "Future generations can be affected by choices made by past and present generations.",
        "Fish that consume plants have the highest levels of mercury compounds.",
        "If people stop eating fish, then the mercury levels in fish will decrease."
      ],
      answer: 1,
      explain: "Mercury enters water from human industrial activity, accumulates up the food chain (bioaccumulation), and especially harms fetuses and young children. So pollution today affects our kids tomorrow — present choices affect future generations. Choice (3) is opposite of true: predatory fish (not plant-eaters) have most mercury. Official answer: (2)." },

    { id: "le-jun24-37", topic: "Genetics: Gene Expression",
      source: "Living Environment Regents · June 2024 · Q37",
      q: "Three genetically identical water fleas show different physical features depending on which predator is in their environment (none, stickleback fish, backswimmer bug). Which statement best explains why?",
      choices: [
        "Random alterations of genes occur in water fleas when they eat different foods.",
        "Predators in the water flea's environment cause mutations in the water flea.",
        "Genes are not involved in the appearance of these water fleas.",
        "Water flea gene expression can be influenced by the type of predator present in their environment."
      ],
      answer: 3,
      explain: "Same genes, different appearances = different gene EXPRESSION. The environment can switch genes on or off. Predator chemicals trigger different defensive features. Choices (1) and (2) describe mutations, but the fleas are 'genetically identical' — no DNA differences. Official answer: (4)." },

    { id: "le-jun24-40", topic: "Evolution: Selection Events",
      source: "Living Environment Regents · June 2024 · Q40",
      q: "In 2010, a rare 'hard freeze' killed 40–90% of the invasive Burmese pythons in the Florida Everglades. The current python population may differ from the pre-2010 population. Which statement best describes a likely cause?",
      choices: [
        "The python species needed cold-tolerant genes, and they appeared in 2010 by rapid mutation.",
        "The freeze event served as a selecting agent, and a higher percentage of the pythons existing today are cold-tolerant.",
        "Many individual pythons were unable to reproduce during the freeze event and did not pass on their cold-tolerant genes.",
        "There was no actual change in the population, and if a similar freeze event occurred again, 40–90% of the snakes would die."
      ],
      answer: 1,
      explain: "Classic natural selection scenario: a sudden environmental pressure (freeze) killed pythons WITHOUT cold tolerance; the survivors WITH cold tolerance reproduced. Today's population is enriched for cold-tolerant genes. Choice (1) is wrong — mutations don't appear 'because they're needed.' Official answer: (2)." },

    { id: "le-jun24-41", topic: "Evolution: Adaptation",
      source: "Living Environment Regents · June 2024 · Q41",
      q: "Pythons in their native habitat eat large animals, then don't feed for weeks. In the Florida Everglades, food sources are smaller mammals and birds. The current large python population in Florida can be described as a species that",
      choices: [
        "will quickly die out because there are no appropriate food sources in their environment",
        "will develop new digestive organs as needed to succeed in the Florida Everglades",
        "has expanded only because small animals reproduce so quickly that they provide an unlimited food source",
        "has already successfully adapted to an unfamiliar environment through natural selection"
      ],
      answer: 3,
      explain: "The python population is large and growing — they've adapted to a new environment (different prey size). Choice (1) is contradicted by the fact they're thriving. Choice (2) is the Lamarckian fallacy. Choice (3) overstates 'unlimited.' Official answer: (4)." }
  ],

  // SSAT page is information-only; no fake questions.
  "ssat-info": []
};
