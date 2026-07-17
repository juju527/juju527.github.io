---
title: "数学分析 II"
description: "数分 II 好难！！！！1"
published: "2026-05-05"
updated: "2026-06-20"
tags:
  - Mathmatical Analysis
category: "学习笔记"
draft: false
featured: false
---

> 数分为什么这么难，救命。

## 多元函数的极限与连续

### $\mathbb R ^n$ 中的度量与点列极限

线性空间→内积空间。

赋范空间：内积开根可作为一个范数。可定义出夹角，Cauchy-schwarz 证明 $\cos\le 1$。

度量空间：范数可作为一个度量。

有了度量能定义邻域 $B_r(a)=\{x\in X|d(x,a)< r\}$。

沿用一维时柯西列的定义定义点列极限。

> Thm: 有限高维点列收敛等价于各分量作为数列收敛

证明考虑各分量能控制住点列的欧几里得范数，容易证明。

> Rmk: 无限维上述结论会出问题
>
> 考虑 $l^2(\mathbb R)$：$e_i=(0,0,\cdots,1,0,\cdots)$，第 $i$ 维为 1。

### $\mathbb R^n$ 的拓扑

我们将一元中开与闭的概念推广。

定义内点，外点，边界点。

$E$ 的内点集为 $E^\circ$，外点集是补集的内点集，即 $(E^c)^\circ$，边界点集为 $\partial E$。

> Rmk: $E$ 的内点集、外点集、边界点集是 $\mathbb R^n$ 的无交并。

定义聚点：称 $a$ 为 $E$ 的聚点当且仅当 $\forall \delta>0:\text{card}(B_\delta(a)\cap E)=\infty$。

定义极限点：称 $a$ 为 $E$ 的极限点当且仅当 $\exists \{x_n\}\in E,\lim_{k\to \infty}x_k=a$（点列要求互异）。

> Thm: 聚点与极限点等价。

聚点推极限点容易，极限点推聚点考虑极限点定义即可。

称所有聚点/极限点集合为**导集** $E'$。

还有一个定义是孤立点，感觉用处不大，知道即可。

#### 开与闭

$E\subset \mathbb R^n$。

1. 若 $E=E^\circ$，称 $E$ 为开集。（所有点均为内点）
2. 若 $E'\subset E$，称 $E$ 为闭集。（对取极限封闭）

全集和空集又是开集又是闭集。

> Rmk: 一般来说 $G$ 是一个开集，$F$ 是一个闭集，$E$ 是一个集合。

称 $\overline E=E\cup E'$ 为 $E$ 的闭包。

> Rmk: 
>
> 1. $E^\circ$ 为 $E$ 中最大开集。
> 2. $\overline E$ 为包含 $E$ 的最小闭集。

先证 $E^\circ$ 为开集，再说明 $E^\circ\supset G$。

先证 $\overline E$ 为闭集，再说明 $E'\subset F$ 即可。

> Rmk: 开闭是一个相对概念，定好全集才能描述开闭。

> Prop: $F$ 是闭集等价于 $F^c$ 是开集。
>
> 很多时候证闭集不容易，证补集是开集是个好想法。

开闭集性质：

1. 任意开集的并仍开，有限开集的交仍开。
2. 任意闭集的交仍闭，有限闭集的并仍闭。

证明是容易的。

> Rmk: 抛开“距离”谈论开与闭。
>
> 不会考，但感觉很深刻。

### $\mathbb R^n$ 中的基本定理

> Thm（Bolzano-Weierstrass 定理）：
>
> $n$ 有限，有界点列必有收敛子列。

利用点列收敛等价于每一维分别收敛，由一维 B-W 依次取收敛子列得证。

BW 是 $\mathbb R^n$ 紧性的反映。

> Thm（Cauchy 收敛原理）：
>
> 点列收敛等价于点列为柯西列。
>
> 柯西列：$\forall \varepsilon>0\exists N\forall k,l>N:d(x_k,x_l)< \varepsilon$。

左到右：easy。
右到左：
Sol1：先证点列有界，通过多维 B-W 找到极限点，验证确为收敛点。
Sol2：从分量出发用一维 Cauchy 收敛证明。

Cauchy 收敛是 $\mathbb R^n$ 完备性的反映。

> Thm（闭集套定理）：
>
> $\{F_k\}$ 是一列非空闭集套，满足：
>
> 1. $F_k\supset F_{k+1}$。
> 2. $\text{diam} F_k\to 0$。
>
> 则 $\exists! \xi\in \cap F_k$。

唯一性反证易知。

存在性考虑构造点列 $\{x_k\in F_k\}$，利用 $\text{diam}F_k\to 0$ 证明其为柯西列。

#### 紧与列紧

定义紧集：若 $E$ 的任意一个开覆盖存在有限子覆盖，则 $E$ 为紧集。

一维情况下的有限开覆盖定理可以被简单叙述为：闭区间是紧集。

> Thm（Heine - Borel 定理）：
>
> $\mathbb R^n$ 中紧集与有界闭等价。

紧→有界闭与维数无关。

有界闭→紧需要反证， $2^n$ 等分利用闭集套推矛盾。

列紧性：任一点列有收敛子列且收敛点在集合中。

> Rmk: 一般度量空间里 紧 $\iff$ 列紧 $\Rightarrow$ 有界闭。

> Thm：
>
> $\mathbb R^n$ 中子集 $K$ 紧、列紧、有界闭等价。

### 多元连续映射

多元极限存在意味着自变量无论以何种方式趋于 $x_0$，函数值趋于同值。

关于累次极限（一元观点）：

1. 多元极限存在推不出多次极限存在

   $f=x\sin\dfrac 1 y+y\sin \dfrac 1 x$，$xy=0$ 处补充定义为 0。

2. 多次极限存在推不出多元极限存在

   $f=\dfrac{xy}{x^2+y^2}$，$(0,0)$ 处补充定义为 0。

3. 多次极限不一定相等

   $f=\dfrac{x-y+x^2+y^2}{x+y}$。

连续性，定义很自然。

四则运算保持连续性，复合映射保持连续性。

### 连续映射的整体性质

若有连续映射 $f\in C(D,\mathbb R^n)$，

目标：$f(\text{紧})=\text{紧},f(\text{连通})=\text{连通}$。

> Thm:
>
> 若 $K$ 是 $\mathbb R^n$ 中的紧集，$f\in C(K,\mathbb R^m)$，则 $f(K)$ 为紧集。

易证 $f(K)$ 的列紧性，得到 $f(K)$ 紧性。

> Cor：有界性、最值定理

由上述定理以及 $\mathbb R^n$ 中紧、列紧、有界闭的等价性可知。

同样可以定义一致连续。

> Thm（康托定理）：
>
> $K$ 紧，$f\in C(K,\mathbb R^m)$，则 $f$ 在 $K$ 上一致连续。

运用紧的性质（有限开覆盖）说明有一致的界。

定义好道路连通，可以证 $f(\text{连通})=\text{连通}$。

## 多元映射微分学

### 微分

对于映射 $f:\mathbb R^n\to \mathbb R^m$，$f$ 在 $\mathrm{x_0}$ 处可微，若存在 $A(\mathrm{x_0})\in M_{m\times n}(\mathbb R)$，
满足 $f(\mathrm{x_0}+\mathrm{\Delta x})=f(\mathrm x_0)+A(\mathrm x_0)\mathrm{\Delta x}+o(|\mathrm{\Delta x}|),|\mathrm{\Delta x}|\to 0$。

称线性映射 $\text{d}f$ （$\mathrm h\to A(\mathrm x_0)\mathrm h$）为 $f$ 在 $\mathrm x_0$ 处的微分。

> Rmk：对于多元函数 $f:\mathbb R^n\to \mathbb R$，有全微分概念。
>
> $\text{d}f|_{\mathrm x_0}=\sum_{i=1}^nA_i\text{d}x_i$

雅可比矩阵 $\{\dfrac{\partial f_i}{\partial x_j}\}_{i\in [n],j\in [m]}$。（Jacobi）

### 微分与偏导的关系

1. 可微知连续。

2. 可微知可偏导。

3. 偏导均存在不一定可微

   $f(x,y)=\dfrac{xy}{\sqrt{x^2+y^2}}$ 在 $(0,0)$ 处。

4. 偏导数在邻域内存在且某点连续，知该点可微。

### 梯度

$f:\mathbb R^n\to\mathbb R^m$。定义哈密顿算子（Hamilton）：

$\nabla f=(\dfrac{\partial f}{\partial x_1},\dfrac{\partial f}{\partial x_2},\cdots,\dfrac{\partial f}{\partial x_n})$。

有内积定义，知 $\nabla f$ 方向即方向导数取最大值的方向，反之取最小值，其模长即方向导数（归一化）最大值。

### 高阶偏导

注意顺序：$f_{xy}=\dfrac{\partial^2 f}{\partial x\partial y}=\dfrac{\partial}{\partial y}(\dfrac{\partial f}{\partial x})$。

高阶偏导对称性：

> Thm：
>
> 若 $f\in C^k(D\subset\mathbb R^n,\mathbb R)$，则 $k$ 次偏导顺序无关。

### 复合函数微分法

链式法则：

$f(g(x))$ 求微分即 $f'(g(x))g'(x)$。

>  Thm（一阶全微分形式不变性）
>
>  无论是自变量还是中间变量，函数一阶全微分形式相同。
>
>  高阶微分不能乱来。

### 微分中值定理

> Thm（微分中值定理）：
>
> 定义凸区域：（开）区域 $D$ 内任意两点连线均包含与 $D$。
>
> $f:D\to \mathbb R$ 可微，则 $\forall \mathrm x,\mathrm y\in D,\exists \xi\in [\mathrm x,\mathrm y]:f(\mathrm y)-f(\mathrm x)=\nabla f(\xi)\cdot (\mathrm y-\mathrm x)$。

证明考虑拉出 $x,y$ 连线 $r(t)=(1-t)\mathrm x+t\mathrm y$，$r:[0,1]\to \mathbb R^n$。

构造辅助函数 $\varphi(t)=f(r(t))$，$\varphi:[0,1]\to\mathbb R$。

有一元微分中值定理，知 $\varphi(1)-\varphi(0)=\varphi'(\theta)$。

$\varphi'(\theta)=f'(r(\theta))r'(\theta)=\nabla f(r(\theta))\cdot (\mathrm y-\mathrm x)$。

> Cor:
>
> $D$ 为开区域，若 $\nabla f$ 在 $D$ 上恒为 $0$，则 $f$ 恒为常数。

> Thm（拟微分中值定理）：
>
> $f:D\to \mathbb R^n$ 可微，则 $\forall \mathrm x,\mathrm y\in D,\exists \xi\in [\mathrm x,\mathrm y]:|f(\mathrm y)-f(\mathrm x)|\le |f'(\xi)|_2\cdot |\mathrm y-\mathrm x|$
>
> Jacobi 矩阵的 2 范数/ F 范数均可，2 范数更紧（最大奇异值）

### 泰勒公式

定义算子 $\Delta x\cdot\nabla=\sum_{i=1}^n \Delta x_i\dfrac{\partial}{\partial x_i}$。

有多元微分中值定理得到多元泰勒公式

若 $f$ 在 $x_0$ 某邻域有 $0\to k$ 阶偏导连续：

$f(x_0+\Delta x)=f(x_0)+\Delta x\cdot\nabla f(x_0)+\dfrac 1 2(\Delta x\cdot\nabla)^2 f(x_0)+\cdots+\dfrac{1}{k!}(\Delta x\cdot\nabla)^kf(x_0)+o(|\Delta x|^k)$。

有手算实际意义的是前两阶展开，定义 Hesse 矩阵 $\{\dfrac{\partial^2 f}{\partial x_i\partial x_j}\}_{i\in[n],j\in[n]}$，则 $\dfrac 1 2(\Delta x\cdot\nabla)^2 f(x_0)=\dfrac{1}{2}\Delta x^\top \text{Hess}(f)(x_0)\Delta x$。

Hesse 矩阵正定/负定/不定可以判定多元函数极值。

### 隐/反函数定理

$F(\mathrm x,\mathrm y)=0$ 何时唯一决定 $\mathrm y=f(\mathrm x)$。

> Thm（一般隐函数定理）：
>
> $F(\mathrm x,\mathrm y)=\vec 0$，$\mathrm x\in \mathbb R^n,\mathrm y\in\mathbb R^m,F:W\to \mathbb R^m$。
>
> 若 $F(\mathrm x_0,\mathrm y_0)=\vec 0$，$F\in C^1(W,\mathbb R^m)$，$F_y(\mathrm x_0,\mathrm y_0)$ 作为 $m\times m$ 矩阵可逆，则：
>
> 存在开集 $V$，满足 $\mathrm x_0\in V$，$\exists! f:V\to \mathbb R^m$：
>
> 1. $f(\mathrm x_0)=\mathrm y_0$
> 2. $\forall x\in V,F(x,y)=0\iff y=f(x)$
> 3. $f\in C^1(V,\mathbb R^m)$，$f'(x)=-[F_y(\mathrm x,f(\mathrm x))]^{-1}F_x(\mathrm x,f(\mathrm x))$

反函数定理叙述几乎一致。

### 应用

1. 空间曲线的切线/法平面

   对于参数化表示的曲线 $r(t)$：

   - 切线

     $P-r(t_0)=\lambda r'(t_0)$，展开成分量形式 $\dfrac{X-x(t_0)}{x'(t_0)}=\dfrac{Y-y(t_0)}{y'(t_0)}=\dfrac{Z-z(t_0)}{z'(t_0)}$。

   - 法平面

     $(P-r(t_0))\cdot r'(t_0)=0$

   对于一般式方程 $F(x,y,z)=G(x,y,z)=0$：

   $r'(t_0)$ 平行于 $\nabla F(P_0)\times \nabla G(P_0)$，求得 $r'(t_0)$ 后容易求出切线和法平面。

2. 曲面的切平面/法线

   曲面一般方程 $F(x,y,z)=0$。$F_x^2+F_y^2+F_z^2\ne 0$，且均连续，则曲面称为光滑正则曲面。

   $\vec n(M_0)=\nabla F(M_0)$，切平面方程 $(P-M_0)\cdot \vec n(M_0)=0$。

   对于曲面的参数化方程，$r:D\to \mathbb R^3$，$\vec n(P_0)=\vec r_x(P_0)\times \vec r_y(P_0)$。

3. 极值问题

   - 无条件极值

     Taylor 公式的应用

   - 条件极值

     > Thm（拉格朗日乘数法）：
     >
     > $\Omega\subset \mathbb R^n$ 为开集，$f,g_1,g_2,\cdots,g_r\in C^1(\Omega,\mathbb R),r<n$。
     >
     > 若 $x_0$ 是 $f$ 在满足约束 $g_1=g_2=\cdots=g_r=0$ 下的一个极值点。
     >
     > 且 $\begin{bmatrix}\nabla g_1(x_0)\\\nabla g_2(x_0)\\\vdots\\\nabla g_r(x_0)\end{bmatrix}$ 作为一个 $r\times n$ 的矩阵满秩（$x_0$ 附近张成了一张 $n-r$ 维曲面）（可以使用隐函数定理，某 $r$ 个变量唯一决定了其他 $n-r$ 维）
     >
     > 则 $\exists \lambda_0=(\lambda_0^1,\lambda_0^2,\cdots,\lambda_0^r)\in \mathbb R^r$，使得 $(x_0,\lambda_0)\in \mathbb R^r$ 作为辅助函数 $L(x,\lambda)=f(x)-\sum_{i=1}^r\lambda^ig_i(x)$ 的驻点。

4. 最小二乘法

   在线性代数课程中我们讨论过这个问题，从多元极值视角也可以得到解法。

   $X$ 是 $m\times n$ 的矩阵，里面放着 $m$ 组自变量， $Y$ 是一个 $m\times 1$ 的向量，存放对应数据的因变量。

   $\alpha=(X^\top X)^{-1}X^\top Y$，拟合的结果是一个 $n\times 1$ 的向量，表示每一维的系数。

## 重积分

回顾一元时黎曼积分的定义，试图推广至高维，我们遇到的唯一困难时定义"面积"。

定义 Jordan 测度，闭小矩形逼近。

> Thm：
>
> $D\subset \mathbb R^2$ 可求面积 $\iff$ $\partial D$ 零面积。
>
> Cor：
>
> 设 $D\subset \mathbb R^2$ 有界，且 $\partial D$ 由有限条分段光滑曲线组成，则 $D$ 可求面积。

> Thm：
>
> $f\in C(D)$，则 $f\in R(D)$。
>
> Thm（勒贝格定理）：
>
> $D\subset \mathbb R^n$ 上可求面积的有界闭区域，$f$ 在 $D$ 上有界，则：
>
> $f\in R(D)\iff f$ 在 $D$ 上的不连续点零测。

我们需要发展关于重积分的计算，先讨论二重积分。

一个自然的想法是考虑累次积分。

- 二重积分的存在无法导出二次积分存在

  考察：
  $$
  f(x)=\left\{\begin{aligned}&\dfrac 1 m+\dfrac 1 p,(x,y)=(\dfrac n m,\dfrac q p)\\&0,\text{otherwise}\end{aligned}\right.
  $$
  二重积分存在，二次积分不存在。

- 二次积分存在无法导出二重积分存在。

  考察：
  $$
  f(x)=\left\{\begin{aligned}&1,(x,y)=(\dfrac n m,\dfrac q p)\\&0,\text{otherwise}\end{aligned}\right.
  $$
  二次积分存在，二重积分不存在。

而当知道存在性的前提下，二者紧密联系。

> Thm(Fubini)：
>
> 设 $D=[a,b]\times [c,d],f\in R(D)$。
>
> $\forall x\in [a,b],h(x):=\int_c^df(x,y)\text d y$ 存在，则 $h\in R[a,b]$ 且 $\iint_D f\text d\sigma=\int_a^bh(x)\text dx=\int_a^b\int_c^df(x,y)\text dy\text dx$。

非矩形面积可以做补充定义转化成二次积分。

### 坐标变换

>  Thm（二重积分变元替换）：
>
>  $U\in \R^2$ 开，$\varphi\in C^1(U,\R^2)$ 且双射。
>
>  $\forall \vec u\in U:\det\varphi'(\vec u)\ne 0$。
>
>  设 $D$ 是 $U$ 中具有分段光滑边界的有界闭区域。（知 $\varphi(D)$ 有同样性质）
>
>  $f\in C(\varphi(D),\R)$。
>
>  $\int_{\varphi(D)}f(x,y)\text{d}x\text d y=\int_Df(\varphi(u,v))\det(\begin{bmatrix}\dfrac{\partial x}{\partial u}&\dfrac{\partial x}{\partial v}\\\dfrac{\partial y}{\partial u}&\dfrac{\partial y}{\partial v}\end{bmatrix})\text d u\text d v$。

给出一些常用的坐标变换：

1. 二维极坐标变换：

   $x=r\sin \theta\\y=r\cos\theta$，$\theta\in [0,2\pi]$，变换系数为 $r$。

2. 球坐标变换

   $x=\rho \sin \phi\cos\theta\\y=\rho\sin\phi\sin\theta\\z=\rho\cos\phi$，$\phi\in[0,\pi],\theta\in[0,2\pi]$，变换系数是 $\rho^2\sin\phi$。

3. 柱坐标变换

   $x=r\cos\theta\\y=r\sin\theta\\z=z$，$\theta\in[0,2\pi]$，变换系数是 $r$。

### 反常重积分

与定积分面临同样的问题：区域有界、函数有界。

Def（穷竭列）：

设 $D\subset \R^2$，为一开区域，且 $R>0,D\cap B_R(0)$ 可求面积，称一系列可求面积的有界闭集列 $\{D_n\}$ 满足：

1. $D_1\subset D_2\subset \cdots\subset D_n\subset\cdots$。
2. $\forall \text{紧集}K\subset D\exists m:K\subset D_m$。

Def（反常重积分）：

$f$ 在 $D$ 上内闭可积，若 $D$ 的任意穷竭列 $\{D_n\}$ 有 $\lim_{n\to\infty}f(x,y)\text dx\text d y=I$，称 $f$ 在 $D$ 上反常可积，积分为 $I$。

Thm：

$f\ge 0$，则 $f$ 在 $D$ 上反常可积（绝对收敛） $\iff$ $\exists\text{穷竭列}\{D_n\}\exists M:\iint_{D_n}f\text dx\text d y<M$。

Thm：

$\iint_D|f|\text d x\text d y<\infty\iff\iint f\text d x\text d y$ 反常可积。



坐标变换不改变反常可积性。



泊松积分：

$\iint_{\R^2}e^{-(x^2+y^2)}\text d x\text d y$。

$2\pi\int_{0}^\infty re^{-r^2}\text d r=\pi$。

$(\int_{-\infty}^\infty e^{-x^2}\text d x)^2=\pi$，知 $\int_{0}^\infty e^{-x^2}\text d x=\dfrac {\sqrt{\pi}}2$。

## 第一类曲线与曲面积分

重要的是定义好曲线长度与曲面面积。

Def（可求长曲线）：

确定方向的曲线，对于一个划分，在划分点间用线段连接，任意划分折线长的上确界称为曲线长度。

对于正则曲线 $\Gamma$，有参数化 $\vec r\in C^1([\alpha,\beta],\R^n)$，$\text{Length}(\Gamma)=\int_{\alpha}^\beta\|r'(t)\|\text d t$。

Thm（第一类曲线积分）：

$\Gamma$ 是正则曲线（$\vec r\in C^1([\alpha,\beta],\R^n)$），$f$ 是定义在 $\Gamma$ 上的有界函数。

$\int_{\Gamma}f\text ds:=\int_\alpha^\beta f(r(t))\|\vec r'(t)\|\text d t$。



Def（曲面面积）：

$\Sigma$ 是一个正则曲面，有参数化 $\vec r:D\subset \R^2\to \R^3$

$\iint_D\|\vec r_u\times \vec r_v(u,v)\|\text d u\text d v$。

系数 $\|\vec r_u\times \vec r_v(u,v)\|=\sqrt{EG-F^2}$，其中 $E=\vec r_u\cdot\vec r_u,G=\vec r_v\cdot\vec r_v,F=\vec r_u\cdot\vec r_v$。

> 一般地，$\R^n$ 中 $\R^k$ 维曲面的面积：$\int_D \sqrt{\det(r'^\top r')(u)}\text d u$。



曲面由 $z=f(x,y)$ 给出，上述系数即 $\sqrt{1+f_x^2+f_y^2}$。

Def（第一类曲面积分）：

$\iint_{\Sigma}f\text d S:=\int_D f(r(u,v))\|\vec r_u\times \vec r_v(u,v)\|\text d u\text d v$ 

## 第二类曲线与曲面积分

第一类积分的对象为多元函数，第二类考虑的是向量值函数。

Def（第二类曲线积分）：

$\Gamma$ 是定向的正则曲线 $\vec \tau(P)$ 是 $P\in \Gamma$ 处与 $\Gamma$ 方向一致的单位切向量，设 $\vec F\in C(\Gamma,\R^3)$。

定义 $\vec F$ 在 $\Gamma$ 上的第二类曲线积分为 $\int_{\Gamma}\vec F\cdot \vec \tau\text d s$。（用第一类曲线积分定义了第二类曲线积分）

若 $\vec F=(P,Q,R)$，也常将第二类曲线积分写作 $\int_{\Gamma}P\text dx+Q\text dy+R\text d z$。

这里将 $\vec\tau \text ds$ 在三个坐标轴上的有向投影形式化的记作了 $\text d x,\text d y,\text d z$。



不同于第一类曲线积分，第二类曲线积分有方向性。

利用曲线的参数化，可以计算第二类曲线积分（根据第一类积分的计算容易得到）：

$\int_{\Gamma}\vec f\cdot\vec\tau\text d s=\int_{\alpha}^\beta\vec f(\vec r(t))\vec r'(t)\text d t$。

第二类曲线积分的一个重要物理场景是做功。



第二类曲面积分的一个重要物理场景是通量。

定义可定向。

Def（第二类曲面积分）：

$\Sigma$ 正则且可定向，指定了一种定向 $\vec n$，设 $\vec F\in C(\Sigma,\R^3)$，定义 $\vec F$ 在 $\Sigma$ 上的第二类曲面积分为 $\iint_{\Sigma}\vec F\cdot\vec n\text d S$。（用第一类曲面积分定义了第二类曲面积分）。

若 $\vec n=(\cos\alpha,\cos\beta,\cos\gamma),\vec F=(P,Q,R)$，第二类曲面积分可以写成 $\iint_\Sigma(P\cos\alpha+Q\cos\beta+R\cos\gamma)\text d S$。

形式化的，将 $\vec n\text d S$ 记作 $(\text dy\wedge \text dz,\text d z\wedge \text dx,\text d x\wedge \text d y)$。中间的楔积记号也可以省略。



由第一类曲面积分的计算公式，给定了 $\Sigma$ 的参数化后，我们容易得到第二类曲面积分的计算公式：

$\int_\Sigma\vec f\cdot\vec n\text d S=\pm\int_D\vec f(\vec r(u,v))\cdot(\vec r_u\times \vec r_v)\text d u\text v$。

## 格林、高斯、斯托克斯公式

三个公式揭示了曲线、曲面积分之间的联系，都是牛顿莱布尼兹公式的推广，体现了关于被积区域取边界和关于被积对象取微分的某种对偶性。

Green 公式联系了平面上第二类曲线积分与二维重积分（平直的曲面积分）。

Gauss 公式联系了第二类曲面积分与三重积分。

Stokes 公式联系了空间中的第二类曲线积分与第二类曲面积分。

前一部分的被积几何对象是后一部分几何对象的边界。

### Green 公式

对于 $\R^2$ 上的有界闭区域 $D$，具有分段光滑边界，确定 $D$ 的定向（向外/内）后，定义 $\partial D$ 的诱导定向为头指向 $D$ 的定向沿 $\partial D$ 走使得 $D$ 一直在左手边的方向。

定义简单闭曲线：一条没有自交点的闭曲线。

定义单连通区域：$D$ 中任何一条简单闭曲线均不可以通过 $D$ 外连续地收缩为一个点。

Thm（Green）：

设 $D\subset \R^2$ 单连通有界闭区域，$\partial D$ 为光滑简单闭曲线，且赋予诱导定向。$P,Q\in C^1(D)$。
$$
\int_{\partial D}P\text d x+Q\text d y=\int_D(\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y})\text d x\text d y
$$

> Rmk：非单连通 Green 也对。



通过 Green 公式可以研究第二类曲线积分何时与路径无关（类似保守力）：

Thm：

$D\subset \R^2$ 为单连通区域，$P,Q\in C^1(D)$，则下列命题等价：

1. 对于 $D$ 内任意一条分段光滑的闭曲线 $L$，有 $\oint_L P\text d x+Q\text d y=0$。
2. 曲线积分 $\int_L P\text d x+Q\text d y$ 与路径无关。
3. 存在 $D$ 上的可微函数 $U(x,y)$ 使得 $\text d U=P\text d x+Q\text d y$，或等价地 $\nabla U=(P,Q)$。此时称 $U$ 为 $P\text d x+Q\text d y$ 的原函数。
4. 在 $D$ 内有 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$。

### Gauss 公式

Def（二维单连通区域）：

$\Omega\subset \R^3$ 为一空间区域，若 $\Omega$ 内的任一封闭曲面所围的立体仍包含于 $\Omega$ 中，称 $\Omega$ 为二维单连通区域。

通俗来说二维单连通区域中没有“洞”。

Thm（Gauss）：

$\Omega$ 是 $\R^3$ 中的二维单连通区域，由分片光滑曲面围成。设向量值函数 $\vec F=(P,Q,R)\in C^1(\Omega)$。$\partial \Omega$ 的定向指向 $\Omega$ 外。
$$
\int_{\partial \Omega}\vec F\cdot \vec n\text d S=\int_{\Omega}\nabla\cdot \vec F\text d x\text d y\text dz
$$
分量形式：
$$
\int_{\partial \Omega}P\text d y\text d z+Q\text d z\text d x+R\text d x\text d y=\int_{\Omega}(\dfrac{\partial P}{\partial x}+\dfrac{\partial Q}{\partial y}+\dfrac{\partial R}{\partial z})\text d x\text d y\text d z
$$

> Rmk：去掉二维单连通改成有界闭 Gauss 也是对的。

### Stokes 公式

对于空间中具有分段光滑边界的、可定向、非封闭光滑曲面 $\Sigma$，给定定向后，类似定义 $\partial \Sigma$ 的诱导定向：若头指向 $\Sigma$ 的定向，沿 $\partial \Sigma$ 走时 $\Sigma$ 总是在左手边。

Thm（Stokes）：

设 $\Sigma$ 是光滑、可定向曲面，具有分段光滑的边界 $\partial \Sigma$，且赋予了诱导定向。设向量值函数 $\vec F=(P,Q,R)$ 在 $\overline \Sigma$ 附近的开集上连续可微。
$$
\int_{\partial \Sigma}\vec F\cdot\vec \tau \text ds=\int_{\Sigma}(\nabla\times \vec F)\cdot\text d \vec S
$$
分量形式：
$$
\int_{\partial \Sigma}P\text d x+Q\text d y+R\text d z=\int_{\Sigma}\left |\begin{matrix}\vec i&\vec j&\vec k\\\partial_x&\partial_y&\partial_z\\P&Q&R\end{matrix}\right |\cdot(\cos \alpha,\cos\beta,\cos\gamma)\text d S\\
=\int_{\Sigma}(\dfrac{\partial R}{\partial y}-\dfrac{\partial Q}{\partial z})\text d y\text d z+(\dfrac{\partial P}{\partial z}-\dfrac{\partial R}{\partial x})\text d z\text d x+(\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y})\text d x\text d y
$$

### 外微分

引入外微分后，可以将上述公式统一起来。

## 函数项级数

讨论函数列 $\{f_n(x)\}$ 的收敛，一个自然的定义是**点态收敛**，fix $x_0$，考察 $\{f_n(x_0)\}$ 作为数列是否收敛。

若 $\{f_n(x)\}$ 在 $D$ 上收敛于 $f(x)$，有 $\varepsilon-N$ 语言描述：$\forall x\in D,\forall \varepsilon>0,\exist N\in \N,\forall n>N:|f_n(x)-f(x)|<\varepsilon$。

这里需要强调的是 $N$ 是关于 $x,\varepsilon$ 的函数。

我们研究函数项级数 $\{\sum_{i=1}^nu_i(x)\}$，希望极限函数能保有一些重要分析性质（连续、可导、可积）。

而只有点态收敛，我们能举出这些分析性质无法保留的例子。我们需要加强条件。

### 一致收敛性

Def（一致收敛）：

设有函数列 $\{f_n(x)\}$，若有 $f(x)$，满足 $\forall \varepsilon>0,\exists N\in \N,\forall n>N,\forall x\in D:|f_n(x)-f(x)|<\varepsilon$，则称 $\{f_n(x)\}$ 在 $D$ 上一致收敛于 $f(x)$。

对于函数项级数，若其部分和函数列在 $D$ 上一致收敛于 $S(x)$，则称函数项级数一致收敛。

> 点态收敛且不一致收敛：$\exists \varepsilon>0,\{n_k\}\uparrow,\{x_k\}\subset D:|f_{n_k}(x_k)-f(x_k)|\ge \varepsilon_0$



我们需要发展一些判定一致收敛/不一致收敛的手段。

Thm（柯西一致收敛准则）：

$\{f_n(x)\}$ 在 $D$ 上一致收敛的充要条件：$\forall \varepsilon>0,\exists N\in\N,\forall n> N,\forall p\in \N,\forall x\in D:|f_{n+p}(x)-f_n(x)|<\varepsilon$。

对于函数项级数：$\forall \varepsilon>0,\exists N\in\N,\forall n> N,\forall p\in \N,\forall x\in D:|\sum_{k=n+1}^{n+p}u_k(x)|<\varepsilon$。

可知函数项级数收敛的一个必要条件是 $\{u_n(x)\}$ 一致收敛于 0。



Prop：

若 $u_n(x)\in C[a,b]$，且函数项级数 $\sum_{n=1}^\infty u_n(x)$ 在 $(a,b)$ 一致收敛，则有 $\sum u_n(a),\sum u_n(b)$ 均收敛，且 $\sum_{n=1}^\infty u_n(x)$ 在 $[a,b]$ 一致收敛。

> 若 $u_n\in C[a,b]$ 且 $\sum u_n(a)$ 或 $\sum u_n(b)$ 不收敛，知 $\sum u_n(x)$ 在 $(a,b)$ 不一致收敛。



Thm（确界极限）：

$\{f_n(x)\}$ 在 $D$ 上一致收敛于 $f(x)$ 的充要条件：$\lim_{n\to \infty}\sup_{x\in D}|f_n(x)-f(x)|=0$。

对于函数项级数，$\lim_{n\to \infty}\sup_{x\in D}|\sum_{k=n+1}^\infty u_k(x)|=0$。



Thm（点列极限）：

$\{f_n(x)\}$ 在 $D$ 上一致收敛于 $f(x)$ 的充要条件：$D$ 中任意数列 $\{x_n\}$，有 $\lim_{n\to \infty}|f_n(x_n)-f(x_n)|=0$。

这个条件比较适合反着来证不一致收敛。



一致收敛有点太牛了，有时候**内闭一致收敛**已经很够用。



Thm（Weierstrass 判别法）：

设函数项级数 $\sum_{n=1}^\infty u_n(x)$ 满足：$\forall n\in\N,\forall x\in D$，有 $|u_n(x)|\le M_n$，且 $\sum_{n=1}^\infty M_n$ 收敛，则 $\sum_{n=1}^\infty u_n(x)$ 在 $D$ 上一致收敛。

$\sum_{n=1}^\infty M_n$ 也称为 $\sum_{n=1}^\infty u_n(x)$ 的控制级数/优级数。证明过程也可以得到**绝对一致收敛**。

> 绝对收敛+一致收敛不一定绝对一致收敛。



Thm（Abel-Dirichlet 判别法）：

$\{u_n(x)\},\{v_n(x)\}$ 满足下列之一条件，则 $\sum_{n=1}^\infty u_n(x)v_n(x)$ 在 $D$ 上一致收敛。

1. （Abel）$\forall x\in D:\{v_n(x)\}$ 关于 $n$ 单调，且在 $D$ 上一致有界，$\sum_{n=1}^\infty u_n(x)$ 在 $D$ 上一致收敛。
2. （Dirichlet）$\forall x\in D:\{v_n(x)\}$ 关于 $n$ 单调，且在 $D$ 上一致趋于 0，$\sum_{n=1}^\infty u_n(x)$ 的部分和在 $D$ 上一致有界。

### 一致收敛函数项级数的性质

Thm（连续性）：

设 $D$ 为区间，$f_n(x)\in C(D),n\in \N,$ 且 $\{f_n(x)\}$ 在 $D$ 上一致收敛于 $f(x)$，则 $f(x)\in C(D)$。

定理条件下，极限顺序可以交换：$\lim_{x\to x_0}\lim_{n\to \infty}f_n(x)=\lim_{n\to \infty}\lim_{x\to x_0} f_n(x_0)$。

函数项级数形势下的连续性定理：

设 $D$ 为区间，$u_n(x)\in C(D),n\in \N$，且 $\sum_{n=1}^\infty u_n(x)$ 在 $D$ 上一致收敛到 $S(x)$，则有 $S(x)\in C(D)$。

定理条件下，极限与无穷求和可交换：$\lim_{x\to x_0}\sum_{n=1}^\infty u_n(x)=\sum_{n=1}^\infty\lim_{x\to x_0}u_n(x)$。

> 连续作为一个局部性质，连续性定理条件可以减弱为 $D$ 上内闭一致收敛。

> 定理证明是一个三段论。



连续性定理的逆定理（由极限函数连续推函数列一致收敛）不成立，我们自然好奇增强怎样的条件可以得到一致收敛。

> 反例：$f_n(x)=x^n,x\in(0,1)$，$(1-\dfrac 1 n)^n\to \dfrac 1 e$。

Thm（Dini 定理）：

函数列 $\{f_n(x)\}$ 满足：

1. $\forall n\in\N:f_n(x)\in C[a,b]$。
2. $\forall x\in [a,b]:f_n(x)$ 关于 $n$ 单调。
3. $\{f_n(x)\}$ 在 $[a,b]$ 上点态收敛于连续函数 $f(x)$。

则 $\{f_n(x)\}$ 在 $[a,b]$ 上一致收敛于 $f(x)$。

> 证明利用有限开覆盖。



Thm（积分号下求极限）：

$f_n(x)\in C[a,b]$，且 $\{f_n(x)\}$ 在 $[a,b]$ 上一致收敛于 $f(x)$，则有 $\int_a^b f(x)\text d x=\lim_{n\to \infty}\int_a^b f_n(x)\text d x$。

Prop（逐项可积性）：

$u_n(x)\in C[a,b]$，且 $\sum_{n=1}^\infty u_n(x)$ 在 $[a,b]$ 上一致收敛于 $S(x)$，则有 $\int_a^b S(x)\text d x=\sum_{n=1}^\infty \int_a^b u_n(x)\text d x$。

即极限运算于无限求和可以交换顺序。



Thm（微分号下取极限）：

$\{f_n(x)\}$ 满足：

1. $\{f_n(x)\}$ 在 $[a,b]$ 上点态收敛于 $f(x)$。
2. $f_n(x)$ 在 $[a,b]$ 上有连续导数。
3. $\{f'_n(x)\}$ 在 $[a,b]$ 上一致收敛。

则 $f(x)$ 在 $[a,b]$ 上有连续导数且 $f'(x)=\dfrac {\text d}{\text d x}\lim_{n\to \infty}f_n(x)=\lim_{n\to \infty}\dfrac {\text d}{\text d x}f_n(x)$。

即微分与极限交换顺序。

Prop（逐项可微性）：。。。

> 类似于连续性，由于可导性也是一个局部性质，内闭一致收敛就足够了。

## 幂级数

Thm（Cauchy-Hadamard）：

对于幂级数 $\sum_{n=1}^\infty a_n x^n$，令 $\rho=\overline \lim_{n\to\infty}\sqrt[n]{|a_n|}$。

1. $\rho\in (0,\infty)$ 时，幂级数在 $(-\dfrac 1 \rho,\dfrac 1 \rho)$ 上绝对收敛。
2. $\rho=0$ 时，幂级数在 $\R$ 上绝对收敛。
3. $\rho=\infty$ 时，幂级数仅在 $\{0\}$ 上收敛。

称 $r=\dfrac 1 \rho$ 为幂级数的收敛半径。

> 注意 $\pm r$ 处是否收敛需要进一步的判断。

收敛半径还可以用比值法计算 $r=\lim_{n\to\infty}|\dfrac{a_n}{a_{n+1}}|$。



幂级数一个非常好的性质是收敛域为一个区间。

下面介绍更多幂级数的性质。

Thm（阿贝尔第一定理）：

若幂级数 $\sum_{n=0}^\infty a_n x^n$：

1. 在点 $x_1$ 处收敛，则 $|x|\lt|x_1|$ 时，幂级数绝对收敛；
2. 在点 $x_2$ 处发散，则 $|x|\gt |x_2|$ 时，幂级数发散。



Thm（阿贝尔第二定理）：

幂级数 $\sum_{n=0}^\infty a_n x^n$ 在其收敛域上内闭一致收敛。

> 这是幂函数非常夯的性质，意味着我们上一章发展的一致收敛性质均可以使用。

下面定理确定了幂级数与其导数级数/积分级数的关系。

Thm：

$\sum_{n=0}^\infty a_n x^n$ 的收敛半径与其导数级数 $\sum_{n=1}^\infty na_n x^{n-1}$，与积分级数 $\sum_{n=0}\dfrac{a_n}{n+1}x^{n+1}$ 有相同的收敛半径。

> 端点处敛散性不一定相同。



Thm：

幂级数和函数收敛域上连续、逐项可积、逐项可微。

> 通过上面几个定理容易证出这个核心结论。



Def（泰勒级数）：

设 $f$ 在 $x_0$ 处无穷次可导，我们称幂级数 $\sum_{n=0}^\infty\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n$ 为 $f$ 在 $x_0$ 处的泰勒级数，记为 $f(x)\sim \sum_{n=0}^\infty\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n$。

我们想知道什么时候 $\sim$ 可以写成 $=$。



由 $f(x)=\sum_{n=0}^m\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n+R_m(x)$，$\lim_{m\to\infty} R_m(x)=0$ 是充要条件。

但显然这很不好用，给出一个充分条件：$|f^{(n)}(x)|$ 在区间上一致有界。



Thm（唯一性）：

若函数 $f$ 在 $x_0$ 处可展开为幂级数，则其展开式必唯一，且就是 $f$ 在 $x_0$ 处的泰勒级数。



一些重要的幂级数展开：

$(1+x)^\alpha=\sum_{n=0}^\infty\dfrac{\alpha^{\underline n}}{n!}x^n$

特别的 $\dfrac 1 {\sqrt{1-x}}=1+\sum_{n=1}^\infty\dfrac{(2n-1)!!}{(2n)!!}x^n$。

$e^x=\sum_{n=0}^\infty\dfrac{1}{n!}x^n$

$\ln(1+x)=\sum_{n=1}^\infty \dfrac{(-1)^{n-1}}{n}x^n$

$\sin x=\sum_{n=0}^\infty\dfrac{(-1)^n}{(2n+1)!}x^{2n+1}$

$\cos x=\sum_{n=0}\dfrac{(-1)^n}{(2n)!}x^{2n}$

$\arctan x=\sum_{n=0}^\infty\dfrac{(-1)^n}{2n+1}x^{2n+1}$



> 斯特林公式 $n!\sim \sqrt{2n\pi}(\dfrac{n}{e})^n$。



## 傅里叶级数

三角，牛牛牛。

三角函数系的正交性：

1. $\int_{-\pi}^\pi\cos nx\sin mx\text d x=0$，对于 $m,n\in\N$ 成立。
2. $\int_{-\pi}^{\pi}\cos nx\cos mx\text{d} x=\left\{\begin{aligned}&0,m\ne n\\&\pi,m=n\ne 0\end{aligned}\right.$
3. $\int_{-\pi}^{\pi}\sin nx\sin mx\text{d} x=\left\{\begin{aligned}&0,m\ne n\\&\pi,m=n\ne 0\end{aligned}\right.$

Def（傅里叶级数）：

$f(x)\sim \dfrac {a_0} 2+\sum_{n=1}^\infty a_n\cos nx+b_n\sin nx$。（三角级数）

欧拉-傅里叶公式：
$$
a_k=\dfrac{1}{\pi}\int_{-\pi}^\pi f(x)\cos kx\text d x\\
b_k=\dfrac{1}{\pi}\int_{-\pi}^\pi f(x)\sin kx\text d x
$$
$f$ 是以 $2\pi$ 为周期的周期函数，在 $[-\pi,\pi]$ 上可积与绝对可积。称上述三角级数为 $f$ 的傅里叶级数。



Def（正弦/余弦级数）：

对于周期为 $2\pi$ 的可积与绝对可积的奇函数，$f(x)\sim\sum_{n=1}^\infty b_n\sin nx$，称为 $f$ 的正弦级数。

同理，若 $f$ 为偶函数，$f(x)\sim \dfrac{a_0} 2+\sum_{n=1}^\infty a_n\cos nx$，称为 $f$ 的余弦级数。



特别的，由于改变有限个点的取值不影响积分值，故 $f$ 除有限个点外满足奇/偶定义，其傅里叶级数仍未正弦/余弦级数。

对于定义在 $[0,\pi]$ 的函数 $f$，先做奇延拓再以 $2\pi$ 为周期做周期延拓，所得傅里叶级数称为 $f$ 的正弦级数。

同理，做偶延拓再做周期延拓，所得傅里叶级数称为 $f$ 的余弦级数。



对于周期为 $2l$ 的函数进行傅里叶展开：$f(x)\sim\dfrac{a_0} 2+\sum_{n=1}^\infty a_n\cos\dfrac {n\pi}l x+b_n\sin\dfrac{n\pi}{l}x$。

$a_n=\dfrac 1 l\int_{-l}^lf(x)\cos\dfrac{n\pi}{l}\text d x$

$b_n=\dfrac 1 l\int_{-l}^lf(x)\sin\dfrac{n\pi}{l}\text d x$



> Rmk：
>
> 傅里叶级数可以统一成更好看的复数形式：
>
> 令 $\omega=\dfrac \pi l$，称为基频。
>
> $c_n=\dfrac{a_n-ib_n}{2}=\dfrac{1}{2l}\int_{-l}^l f(x)e^{-in\omega x}\text d x$。
>
> $c_{-n}=\dfrac{a_n+ib_n}{2}=\dfrac{1}{2l}\int_{-l}^l f(x)e^{in\omega x}\text d x$
>
> $f(x)\sim \sum_{-\infty}^\infty c_ne^{in\omega x}$。



定义好了傅里叶级数之后，我们关心其收敛性：

1. 由 Riemann-Lebesgue 可以保证 $a_n,b_n\to 0$ 成立。
2. 可以证明 $a_n,b_n$ 的收敛速度不错，$f\in C^k$ 有 $a_n,b_n=o(\dfrac 1 {n^k})$；$f$ 分段线性且连续，有 $a_n,b_n=o(\dfrac 1{n^2})$。

### 傅里叶级数的收敛性

考察 $f$ 的 $n$ 阶傅里叶多项式 $S_n(f,x)=\dfrac{a_0}2+\sum_{k=1}^na_k\cos kx+b_k\sin kx$。

代入 $a_k,b_k$ 的表达式，做一步积化和差，有：$S_n(f,x)=\dfrac 1 \pi\int_{-\pi}^\pi f(t)[\dfrac 1 2+\sum_{k=1}^n\cos k(x-t)]\text d t$。

称 Dirichlet Kernel $D_n(u)=\dfrac 1 2+\sum_{k=1}^n\cos ku=\dfrac{\sin\dfrac{2n+1}{2}u}{2\sin\dfrac u 2}$。

> Dirichlet Kernel 有一些好的性质：$\int_{-\pi}^\pi D_n(u)\text d u=\pi$

$$
S_n(f,x)=\dfrac{1}{\pi}\int_{-\pi}^{\pi}f(t)D_n(x-t)\text d t\\
\text{Let } u=x-t\\
S_n(f,x)=\dfrac{1}{\pi}\int_{-\pi}^\pi f(x-u)D_n(u)\text d u
$$

称为 Dirichlet 积分。

进一步改写成：
$$
S_n(f,x)=\dfrac{1}{\pi}\int_{0}^\pi (f(x-u)+f(x+u))D_n(u)\text d u
$$
我们希望分析 $S_n(f)$ 与 $S$ 直接的距离：$S_n(f,x)-\dfrac{f(x+0)+f(x-0)}{2}$
$$
\dfrac{1}{\pi}\big[\int_{0}^\pi (f(x+u)-f(x+0))D_n(u)\text d u+\int_{0}^\pi (f(x-u)-f(x-0))D_n(u)\text d u\big]
$$


Thm（局部性定理）：

$f$ 是以 $2\pi$ 为周期的周期函数，且在 $[-\pi,\pi]$ 上可积与绝对可积，则 $f$ 的傅里叶级数在 $x_0$ 的收敛性只与 $f$ 在 $x_0$ 的任意小领域有关。

$\forall \delta>0$，$(\delta,\pi)$ 上的积分 $\dfrac{1}{\pi}\int_{\delta}^\pi \dfrac{f(x-u)+f(x+u)}{2\sin\dfrac u 2}\sin\dfrac{2n+1}{2}u\text d u$，由 R-L 引理知为 0。

若下面的表达式成立，则级数收敛到 $f$。
$$
\dfrac{1}{\pi}\big[\int_{0}^\delta \dfrac{f(x+u)-f(x+0)}{u}\sin\dfrac{2n+1}{2}u\text d u+\int_{0}^\delta \dfrac{f(x-u)-f(x-0)} u\sin\dfrac{2n+1}2 u\text d u\big]=0
$$


Thm（判别法）：

$f$ 是以 $2\pi$ 为周期的周期函数，在 $[-\pi,\pi]$ 上可积与绝对可积，且满足下列条件之一，则 $f$ 的傅里叶级数在 $x$ 收敛到 $\dfrac{f(x+0)+f(x-0)}{2}$。

1. （狄利克雷-若尔当）$f(x)$ 分段可导或分段单调。
2. （迪尼-利普希茨）$f(x)$ 在点 $x$ 满足 $\alpha\in (0,1]$ 的 Holder 条件，即 $\exists L>0,\delta>0,\forall u\in(0,\delta):|f(x\pm u)-f(x\pm 0)|\le L u^\alpha$。



$\sum_{n=1}^\infty\dfrac 1{n^2}=\dfrac {\pi^2}6$。



### 傅里叶级数的性质

最后我们来讨论一下傅里叶级数的分析性质和逼近性质。

Thm（逐项可积性）：

$f$ 在 $[-\pi,\pi]$ 上可积与绝对可积，其傅里叶级数 $f(x)\sim \dfrac {a_0} 2+\sum_{n=1}^\infty a_n\cos nx+b_n\sin nx$。

则 $\forall x\in[-\pi,\pi]:\int_0^x f(t)\text d t=\dfrac {a_0}2 x+\sum_{n=1}^\infty\dfrac{a_n}{n}\sin n x-\dfrac{b_n}{n}\cos nx+\dfrac{b_n}n$

Prop：

对于三角级数 $\dfrac {a_0} 2+\sum_{n=1}^\infty a_n\cos nx+b_n\sin nx$，如果是某个函数的傅里叶级数，则有级数 $\sum_{n=1}^\infty\dfrac{b_n} n$ 收敛。

> 反过来如果 $\sum_{n=1}^\infty\dfrac{b_n} n$ 不收敛，那么上述三角级数一定不是对应和函数的傅里叶级数。



Thm（逐项可微性）：

$f$ 在 $[-\pi,\pi]$ 上连续，$f(-\pi)=f(\pi)$，且除有限个点外可导，$f(x)\sim \dfrac {a_0} 2+\sum_{n=1}^\infty a_n\cos nx+b_n\sin nx$。

若 $f'(x)$ 可积与绝对可积，其傅里叶级数可以由 $f(x)$ 的傅里叶级数逐项求导得到。

$f'(x)\sim \sum_{n=1}^\infty -na_n\sin nx+n b_n\cos nx$。



然后我们讨论傅里叶级数的逼近问题

Def（三角多项式）：

对于 $n\in\N$，形如 $\dfrac{\alpha_0}2+\sum_{k=1}^n\alpha_k\cos kx+\beta_k\sin kx$ 的函数称为 $n$ 阶三角多项式。

记所有 $n$ 阶三角多项式构成的几何为 $\mathbb T^n$。

Def（可积与平方可积）：

若 $f$ 在 $[-\pi,\pi]$ 上黎曼可积或者瑕积分 $\int_{-\pi}^\pi f^2(x)\text d x$ 收敛，称 $f$ 在 $[-\pi,\pi]$ 上可积与平方可积。

记 $[-\pi,\pi]$ 上所有可积与平方可积函数的全体为 $L^2[-\pi,\pi]$。



容易验证 $\mathbb T^n,L^2[-\pi,\pi]$ 是线性空间，且 $\mathbb T^n$ 是 $L^2[-\pi,\pi]$ 的子空间。

定义内积 $\langle f,g\rangle=\int_{-\pi}^\pi f(x)g(x)\text d x$，导出范数 $\|f(x)\|=\sqrt{\int_{-\pi}^\pi f^2(x)\text d x}$。

导出距离 $d(f,g)=\sqrt{\int_{-\pi}^\pi(f(x)-g(x))^2\text d x}$。

由三角函数系的正交性，我们知道 $\{\dfrac{1}{\sqrt{2\pi}},\dfrac{\cos x}{\sqrt \pi},\dfrac{\sin x}{\sqrt\pi},\cdots,\dfrac{\cos nx}{\sqrt{\pi}},\dfrac{\sin nx}{\sqrt{\pi}}\}$ 是 $\mathbb T^n$ 的一组标准正交基。

记 $d(f,\mathbb T^n)$ 为 $f$ 到 $\mathbb T^n$ 的距离，定义为 $\inf_{g\in \mathbb T^n}d(f,g)$。

若存在能取到下确界的函数，称为 $f$ 在 $\mathbb T^n$ 中的**投影/最佳逼近元素**。



Thm（最佳逼近）：

$f\in L^2[-\pi,\pi]$，$S_n(f,x)$ 是 $f(x)$ 的 $n$ 阶傅里叶多项式，则 $S_n(f,x)$ 是 $f$ 在 $\mathbb T^n$ 中的最佳逼近元素。



Prop（Bessel 不等式）：

$f\in L^2[-\pi,\pi]$，则 $\dfrac{a_0^2}2+\sum_{n=1}a_n^2+b_n^2\le \dfrac 1 \pi\int_{-\pi}^\pi f^2(x)\text d x$。

Prop：

$f$ 在 $[-\pi,\pi]$ 上除有限个点外可导，而在这有限个点处单侧可导，且 $f(-\pi)=f(\pi)$，又 $f'(x)$ 在 $[-\pi,\pi]$ 上黎曼可积，则 $f$ 的傅里叶级数在 $[-\pi,\pi]$ 上一致收敛于 $f(x)$。



Def（平方平均收敛）：

$f\in L^2[-\pi,\pi]$，为任一给定函数，若存在 $\{f_n\}\subset L^2[-\pi,\pi]$，使得 $\lim_{n\to\infty} \|f-f_n\|^2=0$ 则称 $\{f_n(x)\}$ 平方平均收敛于 $f(x)$。

Thm（Parseval 等式）：

$f\in L^2[-\pi,\pi]$，则 $f(x)$ 的傅里叶多项式构成的三角多项式列 $\{S_n(f,x)\}$ 平方平均收敛于 $f(x)$，即 $\lim_{n\to\infty}\int_{-\pi}^\pi(f(x)-S_n(f,x))^2\text d x=0$。

等价于 $\dfrac{a_0^2}2+\sum_{n=1}a_n^2+b_n^2= \dfrac 1 \pi\int_{-\pi}^\pi f^2(x)\text d x$。



Parseval 等式也被称作能量等式。

Prop：

$f$ 是 $[-\pi,\pi]$ 上的连续函数，且与三角函数系 $\{1,\cos x,\sin x,\cdots,\cos nx,\sin nx,\cdots\}$ 中每一个函数正交，则有 $f(x)\equiv 0$。

> 证明考虑使用 Parseval 等式。

Prop（唯一性）：

$f,g$ 是 $[-\pi,\pi]$ 上的连续函数，若 $f,g$ 有相同的傅里叶系数，则 $f\equiv g$。

> 相减用上一个推论即可。
