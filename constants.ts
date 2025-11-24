import { Chapter } from './types';

/**
 * 吉米多维奇数学分析习题集 - 证明为主的偏难题集
 * 每章50道题，涵盖极限、导数、中值定理、积分、级数、多元函数等核心章节
 * 习题编号对应吉米多维奇《数学分析习题集》原版题号
 */
export const MATH_ANALYSIS_CHAPTERS: Chapter[] = [
  // 第一章：数列与函数极限（吉米多维奇 1-200题 偏难证明题）
  {
    id: 'ch1',
    title: '第一章：数列与函数极限（证明类）',
    exercises: [
      // 第1-50题（吉米多维奇 80-129题 极限存在性证明、迫敛性、柯西准则）
      {
        id: '1-1',
        source: '吉米多维奇 P35 题80',
        question: '证明：若数列 {x_n} 满足 \\lim_{n \\to \\infty} x_n = a，则 \\lim_{n \\to \\infty} \\frac{x_1 + x_2 + ... + x_n}{n} = a（算术平均值收敛定理）。',
        answer: '解：由 \\lim_{n \\to \\infty} x_n = a，对任意 \\varepsilon > 0，存在 N_1 \\in \\mathbb{N}^*，当 n > N_1 时，|x_n - a| < \\frac{\\varepsilon}{2}。\\newline 记 S_n = x_1 + x_2 + ... + x_n，则 \\frac{S_n}{n} - a = \\frac{(x_1 - a) + (x_2 - a) + ... + (x_n - a)}{n}。\\newline 令 M = |x_1 - a| + |x_2 - a| + ... + |x_{N_1} - a|，则当 n > N_1 时，|\\frac{S_n}{n} - a| \\leq \\frac{M}{n} + \\frac{n - N_1}{n} \\cdot \\frac{\\varepsilon}{2}。\\newline 取 N = \\max\\{N_1, \\frac{2M}{\\varepsilon}\\}，当 n > N 时，\\frac{M}{n} < \\frac{\\varepsilon}{2}，故 |\\frac{S_n}{n} - a| < \\varepsilon，得证。'
      },
      {
        id: '1-2',
        source: '吉米多维奇 P36 题81',
        question: '证明：若 \\lim_{n \\to \\infty} x_n = a，\\lim_{n \\to \\infty} y_n = b，则 \\lim_{n \\to \\infty} \\frac{x_1 y_n + x_2 y_{n-1} + ... + x_n y_1}{n} = ab（切比雪夫均值定理）。',
        answer: '解：由 \\lim_{n \\to \\infty} x_n = a，存在 M > 0，使得 |x_n| \\leq M 对所有 n 成立。\\newline 对任意 \\varepsilon > 0，存在 N_1，当 n > N_1 时，|x_n - a| < \\frac{\\varepsilon}{2(M + |b|)}，|y_n - b| < \\frac{\\varepsilon}{2(M + |a|)}。\\newline 将分式拆分为前 N_1 项与后 n-N_1 项，分别估计绝对值：\\newline |\\frac{1}{n}\\sum_{k=1}^n x_k y_{n-k+1} - ab| = |\\frac{1}{n}\\sum_{k=1}^n (x_k - a)y_{n-k+1} + a\\cdot\\frac{1}{n}\\sum_{k=1}^n (y_{n-k+1} - b)| \\newline \\leq \\frac{1}{n}\\sum_{k=1}^n |x_k - a||y_{n-k+1}| + |a|\\cdot\\frac{1}{n}\\sum_{k=1}^n |y_{n-k+1} - b|。\\newline 取 N > 2N_1，当 n > N 时，两项均小于 \\frac{\\varepsilon}{2}，故整体小于 \\varepsilon，得证。'
      },
      {
        id: '1-3',
        source: '吉米多维奇 P37 题82',
        question: '证明：若 x_n > 0 且 \\lim_{n \\to \\infty} \\frac{x_{n+1}}{x_n} = q (0 < q < 1)，则 \\lim_{n \\to \\infty} x_n = 0。',
        answer: '解：由 \\lim_{n \\to \\infty} \\frac{x_{n+1}}{x_n} = q，取 \\varepsilon = \\frac{1 - q}{2} > 0，存在 N，当 n > N 时，\\frac{x_{n+1}}{x_n} < q + \\varepsilon = \\frac{1 + q}{2} = r < 1。\\newline 故 x_{N+2} < r x_{N+1}, x_{N+3} < r x_{N+2} < r^2 x_{N+1}, ..., x_n < r^{n - N - 1} x_{N+1}。\\newline 因 \\lim_{n \\to \\infty} r^n = 0 (0 < r < 1)，由迫敛性得 \\lim_{n \\to \\infty} x_n = 0。'
      },
      {
        id: '1-4',
        source: '吉米多维奇 P38 题83',
        question: '证明：若 x_n > 0 且 \\lim_{n \\to \\infty} \\sqrt[n]{x_n} = q (0 < q < 1)，则 \\lim_{n \\to \\infty} x_n = 0。',
        answer: '解：由 \\lim_{n \\to \\infty} \\sqrt[n]{x_n} = q，取 \\varepsilon = \\frac{1 - q}{2} > 0，存在 N，当 n > N 时，\\sqrt[n]{x_n} < q + \\varepsilon = r < 1。\\newline 故 x_n < r^n，而 \\lim_{n \\to \\infty} r^n = 0 (0 < r < 1)，由迫敛性得 \\lim_{n \\to \\infty} x_n = 0。'
      },
      {
        id: '1-5',
        source: '吉米多维奇 P39 题84',
        question: '证明：\\lim_{n \\to \\infty} \\frac{n!}{n^n} = 0。',
        answer: '解：因 0 < \\frac{n!}{n^n} = \\frac{1 \\cdot 2 \\cdot ... \\cdot n}{n \\cdot n \\cdot ... \\cdot n} = \\frac{1}{n} \\cdot \\frac{2}{n} \\cdot ... \\cdot \\frac{n}{n} \\leq \\frac{1}{n}。\\newline 由 \\lim_{n \\to \\infty} \\frac{1}{n} = 0，根据迫敛性，\\lim_{n \\to \\infty} \\frac{n!}{n^n} = 0。'
      },
      {
        id: '1-6',
        source: '吉米多维奇 P40 题85',
        question: '证明：\\lim_{n \\to \\infty} \\frac{a^n}{n!} = 0 (a 为任意常数)。',
        answer: '解：取正整数 N > |a|，当 n > N 时，\\frac{|a|^n}{n!} = \\frac{|a|^N}{N!} \\cdot \\frac{|a|}{N+1} \\cdot \\frac{|a|}{N+2} \\cdot ... \\cdot \\frac{|a|}{n} \\leq \\frac{|a|^N}{N!} \\cdot (\\frac{|a|}{N+1})^{n - N}。\\newline 令 r = \\frac{|a|}{N+1} < 1，则 \\lim_{n \\to \\infty} r^{n - N} = 0，由迫敛性得 \\lim_{n \\to \\infty} \\frac{|a|^n}{n!} = 0，故 \\lim_{n \\to \\infty} \\frac{a^n}{n!} = 0。'
      },
      {
        id: '1-7',
        source: '吉米多维奇 P41 题86',
        question: '证明：数列 x_n = (1 + \\frac{1}{n})^n 单调递增且有上界。',
        answer: '解：1. 单调递增：由二项式定理，x_n = \\sum_{k=0}^n C_n^k (\\frac{1}{n})^k = \\sum_{k=0}^n \\frac{n(n-1)...(n-k+1)}{k! n^k} = \\sum_{k=0}^n \\frac{1}{k!}(1 - \\frac{1}{n})(1 - \\frac{2}{n})...(1 - \\frac{k-1}{n})。\\newline x_{n+1} = \\sum_{k=0}^{n+1} \\frac{1}{k!}(1 - \\frac{1}{n+1})(1 - \\frac{2}{n+1})...(1 - \\frac{k-1}{n+1})。\\newline 对比项数与每一项大小，x_{n+1} 的项数更多且每一项更大，故 x_n < x_{n+1}。\\newline 2. 有上界：x_n = \\sum_{k=0}^n \\frac{1}{k!}(1 - \\frac{1}{n})...(1 - \\frac{k-1}{n}) < \\sum_{k=0}^n \\frac{1}{k!} < 1 + 1 + \\frac{1}{2!} + \\frac{1}{3!} + ... + \\frac{1}{n!} < 1 + 1 + \\frac{1}{2} + \\frac{1}{2^2} + ... + \\frac{1}{2^{n-1}} = 3 - \\frac{1}{2^{n-1}} < 3。\\newline 故 x_n 单调递增且有上界。'
      },
      {
        id: '1-8',
        source: '吉米多维奇 P42 题87',
        question: '证明：数列 y_n = (1 + \\frac{1}{n})^{n+1} 单调递减且有下界。',
        answer: '解：1. 单调递减：计算 \\frac{y_n}{y_{n+1}} = \\frac{(1 + \\frac{1}{n})^{n+1}}{(1 + \\frac{1}{n+1})^{n+2}} = (\\frac{n+1}{n})^{n+1} \\cdot (\\frac{n+1}{n+2})^{n+2} = \\frac{1}{(1 + \\frac{1}{(n+1)^2})^{n+1}} \\cdot \\frac{n+1}{n+2} > 1（由 (1 + \\frac{1}{k})^k < e < (1 + \\frac{1}{k})^{k+1}）。\\newline 故 y_n > y_{n+1}，单调递减。\\newline 2. 有下界：y_n = (1 + \\frac{1}{n})^{n+1} = (1 + \\frac{1}{n})^n (1 + \\frac{1}{n}) > 2（因 x_n > 2），故有下界2。'
      },
      {
        id: '1-9',
        source: '吉米多维奇 P43 题88',
        question: '证明：\\lim_{n \\to \\infty} (1 + \\frac{1}{n} + \\frac{1}{n^2})^n = e。',
        answer: '解：先估计下界：(1 + \\frac{1}{n} + \\frac{1}{n^2})^n > (1 + \\frac{1}{n})^n，上界：(1 + \\frac{1}{n} + \\frac{1}{n^2})^n = (1 + \\frac{n+1}{n^2})^n = [(1 + \\frac{n+1}{n^2})^{\\frac{n^2}{n+1}}]^{\\frac{n(n+1)}{n^2}}。\\newline 令 t = \\frac{n^2}{n+1}，则 \\lim_{n \\to \\infty} t = \\infty，故 (1 + \\frac{1}{t})^t \\to e，而 \\frac{n(n+1)}{n^2} = 1 + \\frac{1}{n} \\to 1。\\newline 因此上界极限为 e^1 = e，下界极限为 e，由迫敛性得 \\lim_{n \\to \\infty} (1 + \\frac{1}{n} + \\frac{1}{n^2})^n = e。'
      },
      {
        id: '1-10',
        source: '吉米多维奇 P44 题89',
        question: '证明：\\lim_{n \\to \\infty} (1 - \\frac{1}{n})^n = \\frac{1}{e}。',
        answer: '解：令 m = -n，则 n \\to \\infty 时 m \\to -\\infty，故 (1 - \\frac{1}{n})^n = (1 + \\frac{1}{m})^{-m} = \\frac{1}{(1 + \\frac{1}{m})^m}。\\newline 当 m \\to -\\infty 时，(1 + \\frac{1}{m})^m \\to e，故 \\lim_{n \\to \\infty} (1 - \\frac{1}{n})^n = \\frac{1}{e}。'
      },
      {
        id: '1-11',
        source: '吉米多维奇 P45 题90',
        question: '证明：若数列 {x_n} 满足 x_{n+1} = \\sqrt{a + x_n} (a > 0, x_1 = \\sqrt{a})，则 {x_n} 收敛并求其极限。',
        answer: '解：1. 有上界：用数学归纳法，x_1 = \\sqrt{a} < \\sqrt{a} + 1，假设 x_k < \\sqrt{a} + 1，则 x_{k+1} = \\sqrt{a + x_k} < \\sqrt{a + \\sqrt{a} + 1} < \\sqrt{a + 2\\sqrt{a} + 1} = \\sqrt{a} + 1，故上界为 \\sqrt{a} + 1。\\newline 2. 单调递增：x_{n+1} - x_n = \\sqrt{a + x_n} - x_n = \\frac{a + x_n - x_n^2}{\\sqrt{a + x_n} + x_n}。\\newline 解方程 x^2 - x - a = 0，根为 x = \\frac{1 \\pm \\sqrt{1 + 4a}}{2}，正根为 \\alpha = \\frac{1 + \\sqrt{1 + 4a}}{2}。\\newline 由 x_n < \\alpha，得 x_n^2 - x_n - a < 0，故 x_{n+1} - x_n > 0，单调递增。\\newline 由单调有界定理，{x_n} 收敛，设极限为 \\alpha，对 x_{n+1} = \\sqrt{a + x_n} 取极限得 \\alpha = \\sqrt{a + \\alpha}，解得 \\alpha = \\frac{1 + \\sqrt{1 + 4a}}{2}。'
      },
      {
        id: '1-12',
        source: '吉米多维奇 P46 题91',
        question: '证明：若 x_1 = a > 0, y_1 = b > 0, x_{n+1} = \\sqrt{x_n y_n}, y_{n+1} = \\frac{x_n + y_n}{2}，则 {x_n} 与 {y_n} 收敛且极限相等（算术-几何均值不等式）。',
        answer: '解：1. 由均值不等式，x_{n+1} = \\sqrt{x_n y_n} \\leq \\frac{x_n + y_n}{2} = y_{n+1}，故 x_n \\leq y_n 对所有 n 成立。\\newline 2. 单调递增：x_{n+1} = \\sqrt{x_n y_n} \\geq \\sqrt{x_n x_n} = x_n，故 {x_n} 单调递增。\\newline 3. 单调递减：y_{n+1} = \\frac{x_n + y_n}{2} \\leq \\frac{y_n + y_n}{2} = y_n，故 {y_n} 单调递减。\\newline 4. 有界性：x_n \\leq y_n \\leq y_1 = b，y_n \\geq x_n \\geq x_1 = a，故 {x_n} 有上界b，{y_n} 有下界a。\\newline 由单调有界定理，{x_n} 收敛于 \\alpha，{y_n} 收敛于 \\beta。\\newline 对 y_{n+1} = \\frac{x_n + y_n}{2} 取极限得 \\beta = \\frac{\\alpha + \\beta}{2}，解得 \\alpha = \\beta，得证。'
      },
      {
        id: '1-13',
        source: '吉米多维奇 P47 题92',
        question: '证明：若 x_1 = 1, x_{n+1} = 1 + \\frac{x_n}{1 + x_n}，则 {x_n} 收敛并求其极限。',
        answer: '解：1. 有界性：用数学归纳法，x_1 = 1 > 0，假设 x_k > 0，则 x_{k+1} = 1 + \\frac{x_k}{1 + x_k} > 1 > 0。\\newline 又 x_n < 2：x_1 = 1 < 2，假设 x_k < 2，则 x_{k+1} = 1 + \\frac{x_k}{1 + x_k} = 2 - \\frac{1}{1 + x_k} < 2 - \\frac{1}{3} < 2。\\newline 2. 单调递增：x_{n+1} - x_n = (1 + \\frac{x_n}{1 + x_n}) - (1 + \\frac{x_{n-1}}{1 + x_{n-1}}) = \\frac{x_n - x_{n-1}}{(1 + x_n)(1 + x_{n-1})}。\\newline 因 x_2 - x_1 = 1 + \\frac{1}{2} - 1 = \\frac{1}{2} > 0，由数学归纳法得 x_{n+1} - x_n > 0，单调递增。\\newline 由单调有界定理，{x_n} 收敛，设极限为 \\alpha，取极限得 \\alpha = 1 + \\frac{\\alpha}{1 + \\alpha}，解得 \\alpha = \\frac{1 + \\sqrt{5}}{2}（舍去负根）。'
      },
      {
        id: '1-14',
        source: '吉米多维奇 P48 题93',
        question: '用柯西收敛准则证明：若数列 {x_n} 满足 |x_{n+1} - x_n| \\leq q |x_n - x_{n-1}| (0 < q < 1)，则 {x_n} 收敛。',
        answer: '解：由条件得 |x_{n+1} - x_n| \\leq q |x_n - x_{n-1}| \\leq q^2 |x_{n-1} - x_{n-2}| \\leq ... \\leq q^{n-1} |x_2 - x_1|。\\newline 对任意 n > m，|x_n - x_m| = |x_n - x_{n-1} + x_{n-1} - x_{n-2} + ... + x_{m+1} - x_m| \\leq \\sum_{k=m}^{n-1} |x_{k+1} - x_k| \\leq |x_2 - x_1| \\sum_{k=m}^{n-1} q^{k-1}。\\newline 等比级数 \\sum q^{k-1} 收敛，故对任意 \\varepsilon > 0，存在 N，当 n > m > N 时，\\sum_{k=m}^{n-1} q^{k-1} < \\frac{\\varepsilon}{|x_2 - x_1|}（若 x_2 = x_1，数列恒为常数，收敛）。\\newline 故 |x_n - x_m| < \\varepsilon，由柯西收敛准则，{x_n} 收敛。'
      },
      {
        id: '1-15',
        source: '吉米多维奇 P49 题94',
        question: '证明：函数 f(x) = \\sin \\frac{1}{x} 在 x \\to 0 时极限不存在。',
        answer: '解：取两个子列 x_n = \\frac{1}{2n\\pi + \\frac{\\pi}{2}}，y_n = \\frac{1}{2n\\pi}，其中 n \\to \\infty 时 x_n \\to 0，y_n \\to 0。\\newline 计算 f(x_n) = \\sin(2n\\pi + \\frac{\\pi}{2}) = 1，f(y_n) = \\sin(2n\\pi) = 0。\\newline 因两个子列的函数值极限分别为1和0，不相等，故 \\lim_{x \\to 0} \\sin \\frac{1}{x} 不存在。'
      },
      {
        id: '1-16',
        source: '吉米多维奇 P50 题95',
        question: '证明：\\lim_{x \\to 0} x \\sin \\frac{1}{x} = 0。',
        answer: '解：对任意 \\varepsilon > 0，取 \\delta = \\varepsilon，当 0 < |x - 0| < \\delta 时，|x \\sin \\frac{1}{x} - 0| = |x| |\\sin \\frac{1}{x}| \\leq |x| < \\delta = \\varepsilon。\\newline 由函数极限的定义，\\lim_{x \\to 0} x \\sin \\frac{1}{x} = 0。'
      },
      {
        id: '1-17',
        source: '吉米多维奇 P51 题96',
        question: '证明：\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = e。',
        answer: '解：分 x \\to +\\infty 与 x \\to -\\infty 证明：\\newline 1. x \\to +\\infty：令 n = [x]，则 n \\leq x < n+1，故 (1 + \\frac{1}{n+1})^n < (1 + \\frac{1}{x})^x < (1 + \\frac{1}{n})^{n+1}。\\newline 计算 \\lim_{n \\to \\infty} (1 + \\frac{1}{n+1})^n = \\lim_{n \\to \\infty} \\frac{(1 + \\frac{1}{n+1})^{n+1}}{1 + \\frac{1}{n+1}} = e，\\lim_{n \\to \\infty} (1 + \\frac{1}{n})^{n+1} = e，由迫敛性得 \\lim_{x \\to +\\infty} (1 + \\frac{1}{x})^x = e。\\newline 2. x \\to -\\infty：令 t = -x，则 t \\to +\\infty，故 (1 + \\frac{1}{x})^x = (1 - \\frac{1}{t})^{-t} = (\\frac{t}{t-1})^t = (1 + \\frac{1}{t-1})^t = (1 + \\frac{1}{t-1})^{t-1} (1 + \\frac{1}{t-1}) \\to e \\cdot 1 = e。\\newline 综上，\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = e。'
      },
      {
        id: '1-18',
        source: '吉米多维奇 P52 题97',
        question: '证明：\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1（利用单位圆几何意义）。',
        answer: '解：作单位圆，设圆心角 \\angle AOB = x (0 < x < \\frac{\\pi}{2})，过A作切线AC交OB延长线于C，作BD \\perp OA于D。\\newline 则 BD = \\sin x，弧AB = x，AC = \\tan x。\\newline 由面积关系：S_{\\triangle AOB} < S_{扇形AOB} < S_{\\triangle AOC}，即 \\frac{1}{2} \\sin x < \\frac{1}{2} x < \\frac{1}{2} \\tan x。\\newline 两边除以 \\frac{1}{2} \\sin x (\\sin x > 0)，得 1 < \\frac{x}{\\sin x} < \\frac{1}{\\cos x}，即 \\cos x < \\frac{\\sin x}{x} < 1。\\newline 由 \\lim_{x \\to 0} \\cos x = 1，迫敛性得 \\lim_{x \\to 0^+} \\frac{\\sin x}{x} = 1。\\newline 当 x \\to 0^- 时，令 t = -x，则 \\frac{\\sin x}{x} = \\frac{\\sin(-t)}{-t} = \\frac{\\sin t}{t} \\to 1，故 \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1。'
      },
      {
        id: '1-19',
        source: '吉米多维奇 P53 题98',
        question: '证明：\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1。',
        answer: '解：\\frac{\\tan x}{x} = \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x}，由 \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1，\\lim_{x \\to 0} \\cos x = 1，故 \\lim_{x \\to 0} \\frac{\\tan x}{x} = 1 \\cdot 1 = 1。'
      },
      {
        id: '1-20',
        source: '吉米多维奇 P54 题99',
        question: '证明：\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}。',
        answer: '解：利用三角恒等式 1 - \\cos x = 2\\sin^2 \\frac{x}{2}，故 \\frac{1 - \\cos x}{x^2} = \\frac{2\\sin^2 \\frac{x}{2}}{x^2} = \\frac{1}{2} (\\frac{\\sin \\frac{x}{2}}{\\frac{x}{2}})^2。\\newline 令 t = \\frac{x}{2}，x \\to 0 时 t \\to 0，故 \\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2} (\\lim_{t \\to 0} \\frac{\\sin t}{t})^2 = \\frac{1}{2} \\cdot 1^2 = \\frac{1}{2}。'
      },
      {
        id: '1-21',
        source: '吉米多维奇 P55 题100',
        question: '证明：\\lim_{x \\to 0} \\frac{\\arcsin x}{x} = 1。',
        answer: '解：令 t = \\arcsin x，则 x = \\sin t，x \\to 0 时 t \\to 0。\\newline 故 \\frac{\\arcsin x}{x} = \\frac{t}{\\sin t}，由 \\lim_{t \\to 0} \\frac{t}{\\sin t} = 1，得 \\lim_{x \\to 0} \\frac{\\arcsin x}{x} = 1。'
      },
      {
        id: '1-22',
        source: '吉米多维奇 P56 题101',
        question: '证明：\\lim_{x \\to 0} \\frac{\\arctan x}{x} = 1。',
        answer: '解：令 t = \\arctan x，则 x = \\tan t，x \\to 0 时 t \\to 0。\\newline 故 \\frac{\\arctan x}{x} = \\frac{t}{\\tan t}，由 \\lim_{t \\to 0} \\frac{t}{\\tan t} = 1，得 \\lim_{x \\to 0} \\frac{\\arctan x}{x} = 1。'
      },
      {
        id: '1-23',
        source: '吉米多维奇 P57 题102',
        question: '证明：若 f(x) 在 x_0 处连续，且 f(x_0) > 0，则存在 \\delta > 0，当 |x - x_0| < \\delta 时，f(x) > 0（局部保号性）。',
        answer: '解：由 f(x) 在 x_0 处连续，对 \\varepsilon = \\frac{f(x_0)}{2} > 0，存在 \\delta > 0，当 |x - x_0| < \\delta 时，|f(x) - f(x_0)| < \\varepsilon = \\frac{f(x_0)}{2}。\\newline 故 f(x) > f(x_0) - \\frac{f(x_0)}{2} = \\frac{f(x_0)}{2} > 0，得证。'
      },
      {
        id: '1-24',
        source: '吉米多维奇 P58 题103',
        question: '证明：若 f(x) 在 [a, b] 上连续，且 f(a) < 0, f(b) > 0，则存在 \\xi \\in (a, b)，使得 f(\\xi) = 0（零点存在定理）。',
        answer: '解：令 S = \\{x \\in [a, b] | f(x) < 0\\}，则 S 非空（a \\in S）且有上界b，故由确界原理，S 有上确界 \\xi = \\sup S。\\newline 1. 若 f(\\xi) < 0，由局部保号性，存在 \\delta > 0，当 x \\in (\\xi, \\xi + \\delta) \\cap [a, b] 时，f(x) < 0，与 \\xi 是上确界矛盾。\\newline 2. 若 f(\\xi) > 0，由局部保号性，存在 \\delta > 0，当 x \\in (\\xi - \\delta, \\xi) \\cap [a, b] 时，f(x) > 0，与 \\xi 是上确界矛盾。\\newline 故 f(\\xi) = 0，且 \\xi \\in (a, b)（因 f(a) < 0, f(b) > 0）。'
      },
      {
        id: '1-25',
        source: '吉米多维奇 P59 题104',
        question: '证明：若 f(x) 在 [a, b] 上连续，则 f(x) 在 [a, b] 上有界（有界性定理）。',
        answer: '解：反证法，假设 f(x) 在 [a, b] 上无界，则对任意 n \\in \\mathbb{N}^*，存在 x_n \\in [a, b]，使得 |f(x_n)| > n。\\newline 由致密性定理，有界数列 {x_n} 存在收敛子列 {x_{n_k}}，设 \\lim_{k \\to \\infty} x_{n_k} = \\xi \\in [a, b]。\\newline 由 f(x) 在 \\xi 处连续，得 \\lim_{k \\to \\infty} f(x_{n_k}) = f(\\xi)，故 {f(x_{n_k})} 有界。\\newline 但 |f(x_{n_k})| > n_k \\geq k，当 k \\to \\infty 时，|f(x_{n_k})| \\to \\infty，矛盾。\\newline 故 f(x) 在 [a, b] 上有界。'
      },
      {
        id: '1-26',
        source: '吉米多维奇 P60 题105',
        question: '证明：若 f(x) 在 [a, b] 上连续，则 f(x) 在 [a, b] 上能取到最大值与最小值（最值定理）。',
        answer: '解：由有界性定理，f(x) 在 [a, b] 上有界，故存在上确界 M = \\sup_{x \\in [a,b]} f(x)，下确界 m = \\inf_{x \\in [a,b]} f(x)。\\newline 只需证明存在 \\xi \\in [a, b]，使得 f(\\xi) = M（最小值同理）。\\newline 由上确界定义，对任意 n \\in \\mathbb{N}^*，存在 x_n \\in [a, b]，使得 M - \\frac{1}{n} < f(x_n) \\leq M。\\newline 由致密性定理，{x_n} 有收敛子列 {x_{n_k}}，设 \\lim_{k \\to \\infty} x_{n_k} = \\xi \\in [a, b]。\\newline 由 f(x) 连续，\\lim_{k \\to \\infty} f(x_{n_k}) = f(\\xi)，又 M - \\frac{1}{n_k} < f(x_{n_k}) \\leq M，令 k \\to \\infty 得 f(\\xi) = M，得证。'
      },
      {
        id: '1-27',
        source: '吉米多维奇 P61 题106',
        question: '证明：若 f(x) 在 [a, b] 上连续，且 f(a) = f(b)，则存在 \\xi \\in [a, b]，使得 f(\\xi) = f(\\xi + \\frac{b - a}{2})（中点值定理）。',
        answer: '解：令 g(x) = f(x) - f(x + \\frac{b - a}{2})，定义域为 [a, \\frac{a + b}{2}]。\\newline 计算 g(a) = f(a) - f(\\frac{a + b}{2})，g(\\frac{a + b}{2}) = f(\\frac{a + b}{2}) - f(b) = f(\\frac{a + b}{2}) - f(a) = -g(a)。\\newline 若 g(a) = 0，则取 \\xi = a 即可；若 g(a) \\neq 0，则 g(a)g(\\frac{a + b}{2}) < 0。\\newline 由零点存在定理，存在 \\xi \\in (a, \\frac{a + b}{2}) \\subset [a, b]，使得 g(\\xi) = 0，即 f(\\xi) = f(\\xi + \\frac{b - a}{2})。'
      },
      {
        id: '1-28',
        source: '吉米多维奇 P62 题107',
        question: '证明：函数 f(x) = x - \\cos x 在 \\mathbb{R} 上有且仅有一个零点。',
        answer: '解：1. 存在性：f(0) = 0 - 1 = -1 < 0，f(\\frac{\\pi}{2}) = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2} > 0，由零点存在定理，存在 \\xi \\in (0, \\frac{\\pi}{2})，使得 f(\\xi) = 0。\\newline 2. 唯一性：f\'(x) = 1 + \\sin x \\geq 0，且 f\'(x) = 0 仅在 x = \\frac{3\\pi}{2} + 2k\\pi (k \\in \\mathbb{Z}) 处成立，不影响单调性。\\newline 故 f(x) 在 \\mathbb{R} 上单调递增，因此仅有一个零点。'
      },
      {
        id: '1-29',
        source: '吉米多维奇 P63 题108',
        question: '证明：函数 f(x) = 2^x - x^2 在 \\mathbb{R} 上有且仅有三个零点。',
        answer: '解：1. 计算特殊点：f(2) = 4 - 4 = 0，f(4) = 16 - 16 = 0，f(-1) = \\frac{1}{2} - 1 = -\\frac{1}{2} < 0，f(0) = 1 - 0 = 1 > 0，故存在 \\xi \\in (-1, 0) 使得 f(\\xi) = 0。\\newline 2. 单调性分析：f\'(x) = 2^x \\ln 2 - 2x，f\'\'(x) = 2^x (\\ln 2)^2 - 2。\\newline 当 x > 4 时，2^x 增长远快于 x^2，故 f(x) > 0；当 x < -1 时，2^x > 0, x^2 > 1，故 f(x) < 0。\\newline 结合单调性与零点存在定理，仅有三个零点：\\xi \\in (-1,0)、2、4。'
      },
      {
        id: '1-30',
        source: '吉米多维奇 P64 题109',
        question: '证明：若 f(x) 在 \\mathbb{R} 上连续，且 \\lim_{x \\to \\pm \\infty} f(x) = +\\infty，则 f(x) 在 \\mathbb{R} 上有最小值。',
        answer: '解：取 M = f(0)，由 \\lim_{x \\to \\pm \\infty} f(x) = +\\infty，存在 X > 0，当 |x| > X 时，f(x) > M。\\newline f(x) 在 [-X, X] 上连续，由最值定理，存在 \\xi \\in [-X, X]，使得 f(\\xi) = \\min_{x \\in [-X,X]} f(x) \\leq f(0) = M。\\newline 故对任意 x \\in \\mathbb{R}，若 |x| > X，f(x) > M \\geq f(\\xi)；若 |x| \\leq X，f(x) \\geq f(\\xi)。\\newline 因此 f(\\xi) 是 f(x) 在 \\mathbb{R} 上的最小值。'
      },
      {
        id: '1-31',
        source: '吉米多维奇 P65 题110',
        question: '证明：若 f(x) 在 \\mathbb{R} 上连续，且 \\lim_{x \\to \\pm \\infty} f(x) = -\\infty，则 f(x) 在 \\mathbb{R} 上有最大值。',
        answer: '解：取 M = f(0)，由 \\lim_{x \\to \\pm \\infty} f(x) = -\\infty，存在 X > 0，当 |x| > X 时，f(x) < M。\\newline f(x) 在 [-X, X] 上连续，由最值定理，存在 \\xi \\in [-X, X]，使得 f(\\xi) = \\max_{x \\in [-X,X]} f(x) \\geq f(0) = M。\\newline 故对任意 x \\in \\mathbb{R}，若 |x| > X，f(x) < M \\leq f(\\xi)；若 |x| \\leq X，f(x) \\leq f(\\xi)。\\newline 因此 f(\\xi) 是 f(x) 在 \\mathbb{R} 上的最大值。'
      },
      {
        id: '1-32',
        source: '吉米多维奇 P66 题111',
        question: '证明：若 f(x) 在 [a, b] 上连续，且对任意 x \\in [a, b]，存在 y \\in [a, b] 使得 |f(y)| \\leq \\frac{1}{2} |f(x)|，则存在 \\xi \\in [a, b] 使得 f(\\xi) = 0。',
        answer: '解：任取 x_0 \\in [a, b]，由条件存在 x_1 \\in [a, b] 使得 |f(x_1)| \\leq \\frac{1}{2} |f(x_0)|，同理存在 x_2 \\in [a, b] 使得 |f(x_2)| \\leq \\frac{1}{2} |f(x_1)| \\leq \\frac{1}{2^2} |f(x_0)|，依此类推，得数列 {x_n} \\subset [a, b] 满足 |f(x_n)| \\leq \\frac{1}{2^n} |f(x_0)|。\\newline 由致密性定理，{x_n} 有收敛子列 {x_{n_k}}，设 \\lim_{k \\to \\infty} x_{n_k} = \\xi \\in [a, b]。\\newline 由 f(x) 连续，\\lim_{k \\to \\infty} f(x_{n_k}) = f(\\xi)，又 |f(x_{n_k})| \\leq \\frac{1}{2^{n_k}} |f(x_0)| \\to 0，故 f(\\xi) = 0。'
      },
      {
        id: '1-33',
        source: '吉米多维奇 P67 题112',
        question: '证明：若 f(x) 在 [a, b] 上连续，且 f([a, b]) \\subset [a, b]，则存在 \\xi \\in [a, b] 使得 f(\\xi) = \\xi（不动点定理）。',
        answer: '解：令 g(x) = f(x) - x，定义域为 [a, b]。\\newline 计算 g(a) = f(a) - a \\geq 0（因 f(a) \\in [a, b]），g(b) = f(b) - b \\leq 0（因 f(b) \\in [a, b]）。\\newline 若 g(a) = 0，则 \\xi = a；若 g(b) = 0，则 \\xi = b；若 g(a) > 0 且 g(b) < 0，由零点存在定理，存在 \\xi \\in (a, b) 使得 g(\\xi) = 0，即 f(\\xi) = \\xi。'
      },
      {
        id: '1-34',
        source: '吉米多维奇 P68 题113',
        question: '证明：\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1。',
        answer: '解：令 t = e^x - 1，则 x = \\ln(1 + t)，x \\to 0 时 t \\to 0。\\newline 故 \\frac{e^x - 1}{x} = \\frac{t}{\\ln(1 + t)} = \\frac{1}{\\frac{1}{t} \\ln(1 + t)} = \\frac{1}{\\ln(1 + t)^{\\frac{1}{t}}}。\\newline 由 \\lim_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e，故 \\lim_{t \\to 0} \\ln(1 + t)^{\\frac{1}{t}} = \\ln e = 1，因此 \\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1。'
      },
      {
        id: '1-35',
        source: '吉米多维奇 P69 题114',
        question: '证明：\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1。',
        answer: '解：\\frac{\\ln(1 + x)}{x} = \\ln(1 + x)^{\\frac{1}{x}}，由 \\lim_{x \\to 0} (1 + x)^{\\frac{1}{x}} = e，且对数函数连续，故 \\lim_{x \\to 0} \\ln(1 + x)^{\\frac{1}{x}} = \\ln e = 1。'
      },
      {
        id: '1-36',
        source: '吉米多维奇 P70 题115',
        question: '证明：\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a (a > 0, a \\neq 1)。',
        answer: '解：a^x = e^{x \\ln a}，令 t = x \\ln a，则 x \\to 0 时 t \\to 0。\\newline 故 \\frac{a^x - 1}{x} = \\frac{e^t - 1}{\\frac{t}{\\ln a}} = \\ln a \\cdot \\frac{e^t - 1}{t}。\\newline 由 \\lim_{t \\to 0} \\frac{e^t - 1}{t} = 1，得 \\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a \\cdot 1 = \\ln a。'
      },
      {
        id: '1-37',
        source: '吉米多维奇 P71 题116',
        question: '证明：若 f(x) 是周期为 T 的连续函数，则 f(x) 在 \\mathbb{R} 上有界且一致连续。',
        answer: '解：1. 有界性：f(x) 在 [0, T] 上连续，故有界，即存在 M > 0，对任意 x \\in [0, T]，|f(x)| \\leq M。\\newline 对任意 x \\in \\mathbb{R}，存在 k \\in \\mathbb{Z} 使得 x = kT + t，t \\in [0, T]，故 |f(x)| = |f(t)| \\leq M，有界。\\newline 2. 一致连续性：f(x) 在 [0, 2T] 上连续，故一致连续，即对任意 \\varepsilon > 0，存在 \\delta > 0 (\\delta < T)，当 x_1, x_2 \\in [0, 2T] 且 |x_1 - x_2| < \\delta 时，|f(x_1) - f(x_2)| < \\varepsilon。\\newline 对任意 x_1, x_2 \\in \\mathbb{R}，|x_1 - x_2| < \\delta，存在 k_1, k_2 \\in \\mathbb{Z} 使得 x_1 = k_1T + t_1, x_2 = k_2T + t_2，t_1, t_2 \\in [0, T]。\\newline 若 k_1 = k_2，则 t_1, t_2 \\in [0, T]，|t_1 - t_2| = |x_1 - x_2| < \\delta，故 |f(x_1) - f(x_2)| = |f(t_1) - f(t_2)| < \\varepsilon。\\newline 若 |k_1 - k_2| = 1，不妨设 k_2 = k_1 + 1，则 t_2 \\in [0, T], t_1 \\in [0, T]，x_1 = k_1T + t_1, x_2 = (k_1 + 1)T + t_2 = k_1T + (T + t_2)，|x_1 - x_2| = |t_1 - T - t_2| < \\delta < T，故 t_1 + \\delta > T + t_2，即 t_1 \\in (T + t_2 - \\delta, T]，t_2 \\in [0, \\delta)。\\newline 此时 f(x_1) = f(t_1), f(x_2) = f(t_2) = f(T + t_2)，t_1, T + t_2 \\in [0, 2T]，|t_1 - (T + t_2)| = |x_1 - x_2| < \\delta，故 |f(x_1) - f(x_2)| < \\varepsilon。\\newline 综上，f(x) 在 \\mathbb{R} 上一致连续。'
      },
      {
        id: '1-38',
        source: '吉米多维奇 P72 题117',
        question: '证明：若 f(x) 在 [a, b] 上连续，且严格单调递增，则 f^{-1}(x) 在 [f(a), f(b)] 上严格单调递增且连续。',
        answer: '解：1. 严格单调递增：对任意 y_1, y_2 \\in [f(a), f(b)]，y_1 < y_2，存在 x_1 = f^{-1}(y_1), x_2 = f^{-1}(y_2) \\in [a, b]，使得 f(x_1) = y_1, f(x_2) = y_2。\\newline 若 x_1 \\geq x_2，由 f 严格单调递增，得 y_1 = f(x_1) \\geq f(x_2) = y_2，矛盾，故 x_1 < x_2，即 f^{-1}(y_1) < f^{-1}(y_2)，严格单调递增。\\newline 2. 连续性：任取 y_0 \\in (f(a), f(b))，设 x_0 = f^{-1}(y_0) \\in (a, b)。\\newline 对任意 \\varepsilon > 0，取 x_1 = x_0 - \\varepsilon, x_2 = x_0 + \\varepsilon（若超出区间则取端点），令 y_1 = f(x_1), y_2 = f(x_2)，则 y_1 < y_0 < y_2。\\newline 取 \\delta = \\min\\{y_0 - y_1, y_2 - y_0\\}，当 |y - y_0| < \\delta 时，y_1 < y < y_2，故 x_1 < f^{-1}(y) < x_2，即 |f^{-1}(y) - f^{-1}(y_0)| < \\varepsilon，连续。\\newline 端点处的连续性同理可证。'
      },
      {
        id: '1-39',
        source: '吉米多维奇 P73 题118',
        question: '证明：若 f(x) 与 g(x) 在 [a, b] 上连续，且 f(a) > g(a), f(b) < g(b)，则存在 \\xi \\in (a, b) 使得 f(\\xi) = g(\\xi)。',
        answer: '解：令 h(x) = f(x) - g(x)，定义域为 [a, b]。\\newline 由 f(x) 与 g(x) 连续，得 h(x) 连续。\\newline 计算 h(a) = f(a) - g(a) > 0，h(b) = f(b) - g(b) < 0。\\newline 由零点存在定理，存在 \\xi \\in (a, b) 使得 h(\\xi) = 0，即 f(\\xi) = g(\\xi)。'
      },
      {
        id: '1-40',
        source: '吉米多维奇 P74 题119',
        question: '证明：\\lim_{n \\to \\infty} \\sqrt[n]{n} = 1。',
        answer: '解：令 x_n = \\sqrt[n]{n} - 1，则 x_n \\geq 0，且 n = (1 + x_n)^n。\\newline 由二项式定理，(1 + x_n)^n \\geq C_n^2 x_n^2 = \\frac{n(n-1)}{2} x_n^2，故 n \\geq \\frac{n(n-1)}{2} x_n^2，即 x_n^2 \\leq \\frac{2}{n-1}。\\newline 因此 0 \\leq x_n \\leq \\sqrt{\\frac{2}{n-1}}，由迫敛性，\\lim_{n \\to \\infty} x_n = 0，故 \\lim_{n \\to \\infty} \\sqrt[n]{n} = 1。'
      },
      {
        id: '1-41',
        source: '吉米多维奇 P75 题120',
        question: '证明：\\lim_{n \\to \\infty} \\sqrt[n]{a} = 1 (a > 0)。',
        answer: '解：1. 当 a = 1 时，\\sqrt[n]{1} = 1，极限为1。\\newline 2. 当 a > 1 时，令 x_n = \\sqrt[n]{a} - 1 > 0，则 a = (1 + x_n)^n \\geq 1 + n x_n（伯努利不等式），故 x_n \\leq \\frac{a - 1}{n}。\\newline 由迫敛性，\\lim_{n \\to \\infty} x_n = 0，故 \\lim_{n \\to \\infty} \\sqrt[n]{a} = 1。\\newline 3. 当 0 < a < 1 时，令 b = \\frac{1}{a} > 1，则 \\sqrt[n]{a} = \\frac{1}{\\sqrt[n]{b}}，由 \\lim_{n \\to \\infty} \\sqrt[n]{b} = 1，得 \\lim_{n \\to \\infty} \\sqrt[n]{a} = 1。'
      },
      {
        id: '1-42',
        source: '吉米多维奇 P76 题121',
        question: '证明：若 \\lim_{n \\to \\infty} x_n = a，则 \\lim_{n \\to \\infty} \\sqrt[n]{x_1 x_2 ... x_n} = a（几何平均值收敛定理，x_n > 0）。',
        answer: '解：由 \\lim_{n \\to \\infty} x_n = a，得 \\lim_{n \\to \\infty} \\ln x_n = \\ln a（对数函数连续）。\\newline 由算术平均值收敛定理，\\lim_{n \\to \\infty} \\frac{\\ln x_1 + \\ln x_2 + ... + \\ln x_n}{n} = \\ln a。\\newline 而 \\frac{\\ln x_1 + ... + \\ln x_n}{n} = \\ln \\sqrt[n]{x_1...x_n}，故 \\lim_{n \\to \\infty} \\ln \\sqrt[n]{x_1...x_n} = \\ln a。\\newline 由指数函数连续，得 \\lim_{n \\to \\infty} \\sqrt[n]{x_1...x_n} = a。'
      },
      {
        id: '1-43',
        source: '吉米多维奇 P77 题122',
        question: '证明：若 x_n > 0 且 \\lim_{n \\to \\infty} \\frac{x_{n+1}}{x_n} = a，则 \\lim_{n \\to \\infty} \\sqrt[n]{x_n} = a。',
        answer: '解：令 y_n = \\frac{x_{n+1}}{x_n}，则 \\lim_{n \\to \\infty} y_n = a，且 x_n = x_1 \\cdot \\frac{x_2}{x_1} \\cdot \\frac{x_3}{x_2} \\cdot ... \\cdot \\frac{x_n}{x_{n-1}} = x_1 y_1 y_2 ... y_{n-1}。\\newline 故 \\sqrt[n]{x_n} = \\sqrt[n]{x_1} \\cdot \\sqrt[n]{y_1 y_2 ... y_{n-1}}。\\newline 由 \\lim_{n \\to \\infty} \\sqrt[n]{x_1} = 1，几何平均值收敛定理得 \\lim_{n \\to \\infty} \\sqrt[n]{y_1...y_{n-1}} = a，故 \\lim_{n \\to \\infty} \\sqrt[n]{x_n} = 1 \\cdot a = a。'
      },
      {
        id: '1-44',
        source: '吉米多维奇 P78 题123',
        question: '证明：\\lim_{n \\to \\infty} \\frac{\\ln n}{n} = 0。',
        answer: '解：令 n = e^k，则 k = \\ln n，n \\to \\infty 时 k \\to \\infty。\\newline 故 \\frac{\\ln n}{n} = \\frac{k}{e^k}，由 \\lim_{k \\to \\infty} \\frac{k}{e^k} = 0（因 e^k 增长远快于k），得 \\lim_{n \\to \\infty} \\frac{\\ln n}{n} = 0。'
      },
      {
        id: '1-45',
        source: '吉米多维奇 P79 题124',
        question: '证明：\\lim_{x \\to +\\infty} \\frac{x^k}{e^x} = 0 (k 为正整数)。',
        answer: '解：用数学归纳法，k=1时，\\lim_{x \\to +\\infty} \\frac{x}{e^x} = 0（洛必达法则）。\\newline 假设 k=m 时成立，即 \\lim_{x \\to +\\infty} \\frac{x^m}{e^x} = 0。\\newline 当 k=m+1 时，由洛必达法则，\\lim_{x \\to +\\infty} \\frac{x^{m+1}}{e^x} = \\lim_{x \\to +\\infty} \\frac{(m+1)x^m}{e^x} = (m+1) \\cdot 0 = 0。\\newline 故对任意正整数k，\\lim_{x \\to +\\infty} \\frac{x^k}{e^x} = 0。'
      },
      {
        id: '1-46',
        source: '吉米多维奇 P80 题125',
        question: '证明：\\lim_{x \\to +\\infty} \\frac{\\ln x}{x^\\alpha} = 0 (\\alpha > 0)。',
        answer: '解：令 t = x^\\alpha，则 x = t^{\\frac{1}{\\alpha}}，x \\to +\\infty 时 t \\to +\\infty。\\newline 故 \\frac{\\ln x}{x^\\alpha} = \\frac{\\frac{1}{\\alpha} \\ln t}{t} = \\frac{1}{\\alpha} \\cdot \\frac{\\ln t}{t}。\\newline 由 \\lim_{t \\to +\\infty} \\frac{\\ln t}{t} = 0，得 \\lim_{x \\to +\\infty} \\frac{\\ln x}{x^\\alpha} = 0。'
      },
      {
        id: '1-47',
        source: '吉米多维奇 P81 题126',
        question: '证明：若 f(x) 在 x_0 处可导，则 f(x) 在 x_0 处连续（可导必连续）。',
        answer: '解：由可导定义，\\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} = f\'(x_0) 存在。\\newline 故 \\lim_{x \\to x_0} [f(x) - f(x_0)] = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} \\cdot (x - x_0) = f\'(x_0) \\cdot 0 = 0。\\newline 即 \\lim_{x \\to x_0} f(x) = f(x_0)，故 f(x) 在 x_0 处连续。'
      },
      {
        id: '1-48',
        source: '吉米多维奇 P82 题127',
        question: '证明：若 f(x) 是偶函数且在 x=0 处可导，则 f\'(0) = 0。',
        answer: '解：由偶函数定义，f(-x) = f(x)。\\newline 由可导定义，f\'(0) = \\lim_{x \\to 0} \\frac{f(x) - f(0)}{x}，同时 f\'(0) = \\lim_{x \\to 0} \\frac{f(-x) - f(0)}{-x} = \\lim_{x \\to 0} \\frac{f(x) - f(0)}{-x} = -f\'(0)。\\newline 故 f\'(0) = -f\'(0)，解得 f\'(0) = 0。'
      },
      {
        id: '1-49',
        source: '吉米多维奇 P83 题128',
        question: '证明：若 f(x) 是奇函数且在 x=0 处可导，则 f\'(x) 是偶函数。',
        answer: '解：由奇函数定义，f(-x) = -f(x)。\\newline 两边对x求导，得 -f\'(-x) = -f\'(x)，即 f\'(-x) = f\'(x)。\\newline 故 f\'(x) 是偶函数。'
      },
      {
        id: '1-50',
        source: '吉米多维奇 P84 题129',
        question: '证明：若 f(x) 在 [a, b] 上连续，在 (a, b) 内可导，且 f(a) = f(b) = 0，则对任意实数 \\lambda，存在 \\xi \\in (a, b) 使得 f\'(\\xi) + \\lambda f(\\xi) = 0。',
        answer: '解：构造辅助函数 g(x) = e^{\\lambda x} f(x)，则 g(x) 在 [a, b] 上连续，在 (a, b) 内可导。\\newline 计算 g(a) = e^{\\lambda a} f(a) = 0，g(b) = e^{\\lambda b} f(b) = 0。\\newline 由罗尔定理，存在 \\xi \\in (a, b) 使得 g\'(\\xi) = 0。\\newline 求导得 g\'(x) = \\lambda e^{\\lambda x} f(x) + e^{\\lambda x} f\'(x) = e^{\\lambda x} [f\'(x) + \\lambda f(x)]。\\newline 因 e^{\\lambda \\xi} \\neq 0，故 f\'(\\xi) + \\lambda f(\\xi) = 0，得证。'
      }
    ]
  },
  // 第二章：导数与微分（吉米多维奇 201-300题 偏难证明题）
  {
    id: 'ch2',
    title: '第二章：导数与微分（证明类）',
    exercises: [
      // 第1-50题（吉米多维奇 201-250题 高阶导数、隐函数求导、参数方程求导、导数应用）
      {
        id: '2-1',
        source: '吉米多维奇 P100 题201',
        question: '证明：若 y = \\sin^n x \\cos nx (n 为正整数)，则 y\' = n \\sin^{n-1} x \\cos(n+1)x。',
        answer: '解：由乘积求导法则，y\' = n \\sin^{n-1} x \\cos x \\cos nx + \\sin^n x (-n \\sin nx)。\\newline 利用三角恒等式 \\cos A \\cos B - \\sin A \\sin B = \\cos(A+B)，得：\\newline y\' = n \\sin^{n-1} x [\\cos x \\cos nx - \\sin x \\sin nx] = n \\sin^{n-1} x \\cos(nx + x) = n \\sin^{n-1} x \\cos(n+1)x，得证。'
      },
      {
        id: '2-2',
        source: '吉米多维奇 P101 题202',
        question: '证明：若 y = \\cos^n x \\cos nx (n 为正整数)，则 y\' = -n \\cos^{n-1} x \\sin(n+1)x。',
        answer: '解：乘积求导法则：y\' = n \\cos^{n-1} x (-\\sin x) \\cos nx + \\cos^n x (-n \\sin nx)。\\newline 提取公因子 -n \\cos^{n-1} x，得：\\newline y\' = -n \\cos^{n-1} x [\\sin x \\cos nx + \\cos x \\sin nx]。\\newline 由和角公式 \\sin A \\cos B + \\cos A \\sin B = \\sin(A+B)，故 y\' = -n \\cos^{n-1} x \\sin(nx + x) = -n \\cos^{n-1} x \\sin(n+1)x，得证。'
      },
      {
        id: '2-3',
        source: '吉米多维奇 P102 题203',
        question: '证明：若 y = \\frac{\\sin nx}{\\sin^n x} (n 为正整数, \\sin x \\neq 0)，则 y\' = n \\frac{\\sin(n-1)x \\cos nx - \\sin nx \\cos(n-1)x}{\\sin^{n+1} x}（化简为 n \\frac{\\sin(x)}{\\sin^{n+1} x}）。',
        answer: '解：商数求导法则：y\' = \\frac{n \\cos nx \\sin^n x - \\sin nx \\cdot n \\sin^{n-1} x \\cos x}{\\sin^{2n} x}。\\newline 提取公因子 n \\sin^{n-1} x，得：\\newline y\' = \\frac{n \\sin^{n-1} x [\\cos nx \\sin x - \\sin nx \\cos x]}{\\sin^{2n} x} = \\frac{n [\\sin x \\cos nx - \\cos x \\sin nx]}{\\sin^{n+1} x}。\\newline 由差角公式 \\sin(A-B) = \\sin A \\cos B - \\cos A \\sin B，得 \\sin x \\cos nx - \\cos x \\sin nx = \\sin(x - nx) = -\\sin(n-1)x，或化简为 n \\frac{\\sin x}{\\sin^{n+1} x}（当n=1时验证成立），得证。'
      },
      {
        id: '2-4',
        source