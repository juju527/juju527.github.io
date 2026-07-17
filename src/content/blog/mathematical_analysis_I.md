---
title: "数学分析 I"
description: "数分取之！！！！！！1"
published: "2026-01-05"
updated: "2026-01-05"
tags:
  - Mathmatical Analysis
category: "学习笔记"
draft: false
featured: false
---

> 博主明天就要考数分了/ll

### 数列极限

#### Stolz 定理

1. $*/\infty$

   $\{y_n\}$ 严格增，$\lim_{n\rightarrow\infty} y_n=+\infty$，若 $\lim_{n\rightarrow \infty} \dfrac{x_n-x_{n-1}}{y_n-y_{n-1}}=A$ 存在，则 $\lim_{n\rightarrow \infty}\dfrac{x_n}{y_n}=A$。 

2. $0/0$

   $\{y_n\}$ 单调趋于 $0$，$x_n\rightarrow 0$，其余相同。

### 实数

#### 构造

十进制小数，戴德金分割。

#### 确界存在定理（连续性）

$S\subset \R$，$S$ 有上界（下界），则 $\sup S$（$\inf S$）存在。

#### 单调有界数列必收敛

确界存在定理知有上确界，说明这个确界就是极限即可。

#### Bolzano–Weierstrass (BW)

有界数列必有收敛子列。

Lemma: 单调子列存在，再用单调有界数列必收敛得证。

#### 闭区间套定理

常用二分法。

#### 柯西收敛原理（完备性）

数列收敛的等价描述：$\forall \epsilon>0,\exist N>0,\forall m,n>N:|x_n-x_m|<\epsilon$。

不需要知道数列极限的具体值也可以描述收敛。

#### 有限开覆盖定理

$[a,b]\subseteq \cup_{\lambda\in \Lambda}(a_\lambda,b_\lambda)$，存在有限个开集覆盖这个闭区间。

### 函数极限与连续

$\lim_{x\rightarrow x_0}f(x)$，不关心 $f$ 是否在 $x_0$ 处有定义。

#### 海涅定理

$\lim_{x\rightarrow x_0}f(x)=A\Leftrightarrow \forall \{x_n\}\rightarrow x_0,\lim_{n\rightarrow \infty}f(x_n)=A $。

#### 柯西收敛准则

一个 $\lim_{x\rightarrow x_0} f(x)$ 存在的等价条件：

$\forall \epsilon >0,\forall \delta>0,\forall x,y\in B_{\delta}(x_0)/ \{x_0\}:|f(x)-f(y)|<\epsilon$。

#### 连续与间断

#### $C[a,b]$ 的性质

1. 有界性
2. 最值定理
3. 零点存在定理
4. 介值定理

#### 一致连续

$\forall \epsilon >0,\exist \delta>0,\forall x_1,x_2\in I,|x_1-x_2|<\delta:|f(x_1)-f(x_2)|<\epsilon$。

判断不一致连续：$\exist \{x_n\},\{y_n\},\lim_{n\rightarrow \infty}x_n-y_n=0:\lim_{n\rightarrow \infty}f(x_n)-f(y_n)\neq0$。

#### 康托定理

$f\in C[a,b]\rightarrow f\in U.C[a,b]$。

有限开覆盖可证。

### 一元微分学

#### 微分中值定理

注意要求在闭区间上有连续性。

Rolle 中值定理：$f\in C[a,b]$，$f$ 在 $(a,b)$ 可导，$f(a)=f(b)$，则 $\exist \xi\in(a,b):f'(\xi)=0$。
证明需要 Fermat 引理（$f$ 在 $x_0$ 处可导且是极值点，有 $f'(x_0)=0$），然后用连续函数的最值定理。

Lagrange 中值定理：$f\in C[a,b]$，$f$ 在 $(a,b)$ 可导，则 $\exist \xi\in(a,b):f'(\xi)=\dfrac{f(b)-f(a)}{b-a}$。
给原函数减去一个线性函数变成罗尔即可。

Cauchy 中值定理： $f,g\in C[a,b]$，$f,g$ 在 $(a,b)$ 可导且 $g'(x)\neq 0$，则 $\exist \xi\in(a,b):\dfrac{f'(\xi)}{g'(\xi)}=\dfrac{f(b)-f(a)}{g(b)-g(a)}$。
证明思路是参数化，减一个线性函数变成罗尔。

#### 达布定理 Darboux

导函数介值性：导函数不一定连续，但一定有介值性。

#### 洛必达法则

充分性定理，若能洛出来极限，那么能求出原极限。

#### 泰勒公式

Peano 余项：$f^{(n)}(x)$ 存在，泰勒展开到 $n$ 次项余项是 $o((x-x_0)^n)$. 证明可以 $n-1$ 次洛必达。

Lagrange 余项：要求闭区间上 $n$ 阶导存在，开区间 $n+1$ 阶导存在。

$f(x_0+h)=\sum_{i=0}^n\dfrac{f^{(i)}(x_0)}{i!}h^i+\dfrac{f^{(n+1)}(\xi)}{(n+1)!}h^{n+1},\xi\in(x_0,x_0+h)$.

Cauchy 余项：

$f(x_0+h)=\sum_{i=0}^n\dfrac{f^{(i)}(x_0)}{i!}h^i+\dfrac{f^{(n+1)}(x_0+\theta h)}{n!}h((1-\theta)h)^{n},\theta\in(0,1)$.

泰勒公式唯一性：若 $f^{(n)}(x)$ 存在，$n$ 次泰勒展开唯一。
复合函数泰勒展开，反函数泰勒展开，都是体力活。

$\arctan x=\sum_{k=0}(-1)^k\dfrac{x^{2k+1}}{2k+1}$. 实用：$x-\dfrac 1 3 x^3+O(x^5)$.

$\arcsin x=\sum_{k=0}\dfrac{(2k-1)!!}{(2k)!!}\dfrac{x^{2k+1}}{2k+1}$. 使用：$x+\dfrac 1 6 x^3+O(x^5)$.

#### 应用

一些神秘不等式，凸性。

### 不定积分

重要恒等式：$\sec^2 x-1=\tan^2 x$.

分部积分：反对幂三指，$dx$ 优先与靠后的结合。

重要不定积分：

1. $\int\dfrac 1{1+x^2}dx=\arctan(x)+C$.

2. $\int\dfrac 1{\sqrt{1-x^2}}dx=\arcsin(x)+C$.

   $\arcsin(x)+\arccos(x)=\dfrac\pi 2$.

3. $\int \dfrac 1{\sin x}dx=\ln|\csc x-\cot x|+C$.

   感觉很难记住，但要会推。

   $\int\dfrac {\sin x} {\sin^2 x}dx=\int\dfrac{d(-\cos x)}{1-\cos^2 x}$

   换元 $\cos x$ 变成有理多项式积分，容易处理。

   $\dfrac 1{\cos x}$ 积分是一摸一样的套路。

   用有理多项式积分的观点还可以万能公式换元，即 $t=\tan \dfrac x 2$.

   可以得到 $\int \dfrac 1{\sin x}dx=\ln |\tan \dfrac x 2|+C$.

4. $\int\dfrac 1{\sqrt{x^2+a^2}}dx=\ln|x+\sqrt{x^2+a^2}|+C$.

   推导思路是换元 $x=a\tan t$ 把根号开出来，然后会变成 $\sec$ 的积分， `3` 已经提及。

   $\int \dfrac 1{\sqrt{x^2-a^2}}dx=\ln|x+\sqrt{x^2-a^2}|+C$  这个也差不多。

### 一元积分学

#### 勒贝格定理（Lebesgue）

设 $f$ 在 $[a,b]$ 有界，$f\in R[a,b]$ 的充分必要条件是 $f$ 的不连续点为零测集。

Def(零测集)：设 $E\in \R$, 若 $\forall \epsilon>0,\exist\text{至多可数个开区间}\{I_n\}:E\subset \cup I_n,\sum |I_n|<\epsilon$. 称 $E$ 为一个零测集。

#### 积分第一中值定理

$f,g\in R[a,b]$, $g$ 在 $[a,b]$ 上不变号，则：

$\exist \lambda \in[\inf f,\sup f]:\int_a^b f(x)g(x)dx=\lambda\int_a^b g(x)dx$.

证明考虑积分保序性，也是要求 $g$ 不变号的原因。

#### 变上限积分求导

$f\in R[a,b]$, Def $F(t)=\int_a^t f(x)dx$，有 $F\in C[a,b]$，若 $x_0$ 为 $f$ 连续点，知 $F'(x_0)=f(x_0)$.

#### 泰勒公式积分余项

不停分部积分可以得到泰勒公式的积分余项版本：

$f(x)=\sum_{i=0}^n\dfrac{f^{(i)}(x_0)}{i!}(x-x_0)^i+\int_{x_0}^{x}\dfrac{f^{(n+1)}(t)}{n!}(x-t)^ndt$.

由积分第一中值定理可以得到拉格朗日余项。

#### 积分第二中值定理

分部积分离散版本（Abel 变换）：对于两数列 $\{a_n\},\{b_n\}$，记 $\{B_n\}$ 为 $b$ 的部分和。

$\sum_{i=1}^na_ib_i=\sum_{i=1}^na_i(B_i-B_{i-1})=a_nB_n-\sum_{i=1}^{n-1}B_i(a_{i+1}-a_i)$.

积分第二中值定理：

$f\in R[a,b]$, $g$ 单调，$g'\in R[a,b]$，则 $\exist \xi\in[a,b]:\int_a^b f(x)g(x)dx=g(a)\int_a^{\xi}f(x)dx+g(b)\int_\xi^bf(x)dx$.

$f\in C[a,b]$ 可以直接分部积分+积分第一中值定理证明。

$f\in R[a,b]$ 的版本需要用划分的语言和 Abel 变换证明。

#### 黎曼引理

$f\in R[a,b]$, 则 $\lim_{\lambda\to +\infty}\int_a^b f(x)\sin(\lambda x) dx=0$.

改成 $\cos$ 也对。

推广黎曼引理：$f\in R[a,b]$, $g$ 是以 $T$ 为周期的函数，$g\in R[0,T]$，则：

$\lim_{\lambda\to +\infty}\int_a^bf(x)g(\lambda x)dx=\dfrac 1 T\int_0^Tg(x)dx\int_a^bf(x)dx$.

#### 应用

1. 曲线弧长

   直角坐标系下：形式记号 $dl=\sqrt{dx^2+dy^2}$.

   极坐标系下：形式记号 $dl=\sqrt{r'(\theta)^2+r(\theta)^2}d\theta$.

2. 极坐标下平面图形面积

   $r=r(\theta),\theta\in[\alpha,\beta]$.

   $S=\dfrac 1 2\int_\alpha^\beta r^2(\theta)d\theta$. 物理微元法容易记忆。

   严谨数学证明需要考虑角度的划分，用扇形面积公式刻画达布上下和取极限。

### 反常积分

非负函数：比较判别法，由已知到未知。

一般函数：Abel-Dirichlet 判别法

$\int_a^{+\infty}f(x)g(x)dx$ 收敛的两个充分条件。

1. (Abel): $\int_a^{+\infty}f(x)dx$ 收敛，$g$ 单调有界。
2. (Dirichlet): $F(A)=\int_a^Af(x)dx$ 有界，$g$ 单调趋于 $0$.

### 数项级数

#### 上下极限

$H=\limsup_{n\to +\infty}x_n\Leftrightarrow\left\{\begin{matrix}\forall \varepsilon>0,\exist\{x_n\}\text{中无穷项}> H-\varepsilon\\\forall \varepsilon>0,\exist N,\forall n>N:x_n<H+\varepsilon\end{matrix}\right.$.

下极限类似。

#### 判别法

平行于反常积分。

正项级数本质的判别法是比较判别法，基于经典的比较对象发展出了根式、商式等判别法。

1. **根式判别法**：

   对于正项级数 $\sum_{i=1}^\infty x_i$, $\lambda=\limsup_{n\to \infty}\sqrt[n]{x_n}$.

   $\lambda>1$, 则级数发散，$\lambda<1$ 则级数收敛。

2. **商式判别法**：

   $\limsup_{n\to \infty}\dfrac{x_{n+1}}{x_n}<1$ 知级数收敛，$\liminf_{n\to \infty}\dfrac{x_{n+1}}{x_n}>1$ 知级数发散。

3. **积分判别法**：

   $f:[1,+\infty)\to\R,f\ge 0,f\downarrow$.

   $x_n=f(n)$，知 $\sum_{n=1}^\infty x_n$ 与 $\int_1^{+\infty} f(x)\mathrm dx$ 同敛散。

4. **Raabe 判别法**：

   $\liminf_{n\to \infty}n(\dfrac{x_n}{x_{n+1}}-1)>1$ 知级数收敛，$\limsup_{n\to\infty}n(\dfrac{x_n}{x_{n+1}}-1)<1$ 知级数发散。

5. **Gauss 判别法**：

   同 $\dfrac{1}{n(\ln n)^p}$ 比较，试图提取 $p$ 信息。

   考察 $n\ln n(\dfrac{x_n}{x_{n+1}}-1-\dfrac 1 n)$ 即可。

一般级数判别法平行于反常积分。

1. Leibniz 级数

   $\sum_{n=1}^\infty(-1)^nu_n$,$u_n>0,u_n\downarrow 0$ 称为 Leibniz 级数。

   Leibniz 级数收敛。

2. Abel-Dirichlet 判别法

   $\sum_{n=1}^{\infty}x_ny_n$ 收敛的两个充分条件。

   - (Abel) $\sum_{n=1}^{\infty} x_n$ 收敛，$y_n$ 单调有界。
   - (Dirichlet) $X_N=\sum_{n=1}^Nx_n$ 有界，$y_n$ 单调趋于 $0$.

#### 无穷乘积

$\prod_{n=1}^{\infty}(1+a_n)$ 收敛的一个必要条件是 $\lim_{n\to \infty} a_n=0$.

1. 若 $a_n$ 保号，则无穷乘积收敛的充要条件是 $\sum_{n=1}^{\infty} a_n$ 收敛。
2. 若 $\sum_{n=1}^{\infty} a_n$ 收敛，无穷乘积收敛的充要条件是 $\sum_{n=1}^{\infty} a_n^2$ 收敛

考虑去对之后用 $\ln(1+x)$ 的渐进估计。