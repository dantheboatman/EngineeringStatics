# Statistics extension for [Numbas](https://www.numbas.org.uk/)

This extension provides a load of statistical functions, wrapping the [jStat](https://github.com/jstat/jstat) library, as well as some extra functions not in jStat.

The data binning functions were written by Janet Cheung.

## Functions

This list of functions contains descriptions copied from the jStat documentation.
Click on the function name to see the original documentation.

There are also some extra functions not in jStat.

### Descriptive statistics of a list of numbers

#### [`sum(array)`](http://jstat.github.io/all.html#sum)

Returns the sum of the `array` vector.

#### [`sumsqrd(array)`](http://jstat.github.io/all.html#sumsqrd)

Returns the sum squared of the `array` vector.

#### [`sumsqerr(array)`](http://jstat.github.io/all.html#sumsqerr)

Returns the sum of squared errors of prediction of the `array` vector.

#### [`product(array)`](http://jstat.github.io/all.html#product)

Returns the product of the `array` vector.

#### [`min(array)`](http://jstat.github.io/all.html#min)

Returns the minimum value of the `array` vector.

#### [`max(array)`](http://jstat.github.io/all.html#max)

Returns the maximum value of the `array` vector.

#### [`mean(array)`](http://jstat.github.io/all.html#mean)

Returns the mean of the `array` vector.

#### [`meansqerr(array)`](http://jstat.github.io/all.html#meansqerr)

Returns the mean squared error of the `array` vector.

#### [`geomean(array)`](http://jstat.github.io/all.html#geomean)

Returns the geometric mean of the `array` vector.

#### [`median(array)`](http://jstat.github.io/all.html#median)

Returns the median of the `array` vector.

#### [`cumsum(array)`](http://jstat.github.io/all.html#cumsum)

Returns an array of partial sums in the sequence.

#### [`diff(array)`](http://jstat.github.io/all.html#diff)

Returns an array of the successive differences of the array.

#### [`range(array)`](http://jstat.github.io/all.html#range)

Returns the range of the `array` vector.

#### [`variance(array)`](http://jstat.github.io/all.html#variance)

Returns the variance of the `array` vector.
By default, the population variance is calculated.
Passing `true` to `flag` indicates to compute the sample variance instead.

#### [`population_variance(array)`](http://jstat.github.io/all.html#variance)

Returns the population variance of the `array` vector.

#### [`sample_variance(array)`](http://jstat.github.io/all.html#variance)

Returns the sample variance of the `array` vector.

#### [`stdev(array)`](http://jstat.github.io/all.html#stdev)

Returns the standard deviation of the `array` vector.
By default, the population standard deviation is returned.
Passing `true` to `flag` returns the sample standard deviation.

#### [`population_stdev(array)`](http://jstat.github.io/all.html#stdev)

Returns the population standard deviation of the `array` vector.

#### [`sample_stdev(array)`](http://jstat.github.io/all.html#stdev)

Returns the sample standard deviation of the `array` vector.

#### [`meandev(array)`](http://jstat.github.io/all.html#meandev)

Returns the mean absolute deviation of the `array` vector.

#### [`meddev(array)`](http://jstat.github.io/all.html#meddev)

Returns the median absolute deviation of the `array` vector.

#### [`coeffvar(array)`](http://jstat.github.io/all.html#coeffvar)

Returns the coefficient of variation of the `array` vector.

#### [`quartiles(array)`](http://jstat.github.io/all.html#quartiles)

Returns the quartiles of the `array` vector.

### Correlation of two samples

#### [`covariance(array1, array2)`](http://jstat.github.io/all.html#covariance)

Returns the covariance of the `array1` and `array2` vectors.

#### [`corrcoeff(array1, array2)`](http://jstat.github.io/all.html#corrcoeff)

Returns the population correlation coefficient of the `array1` and `array2` vectors (Pearson's Rho).

#### [`stdev(array, is_sample)`](http://jstat.github.io/all.html#stdev)

Returns the standard deviation of the `array` vector.
By default, the population standard deviation is returned.
Passing `true` to `flag` returns the sample standard deviation.

#### [`variance(array, is_sample)`](http://jstat.github.io/all.html#variance)

Returns the variance of the `array` vector.
By default, the population variance is calculated.
Passing `true` to `flag` indicates to compute the sample variance instead.

#### [`mode(array)`](http://jstat.github.io/all.html#mode)

Returns the mode of the `array` vector.
If there are multiple modes then `mode()` will return all of them.

### Distributions

#### [`betapdf(x, alpha, beta)`](http://jstat.github.io/all.html#jStat.beta.pdf)

Returns the value of `x` in the Beta distribution with parameters `alpha` and `beta`.

#### [`betacdf(x, alpha, beta)`](http://jstat.github.io/all.html#jStat.beta.cdf)

Returns the value of `x` in the cdf for the Beta distribution with parameters `alpha` and `beta`.

#### [`betainv(p, alpha, beta)`](http://jstat.github.io/all.html#jStat.beta.inv)

Returns the value of `p` in the inverse of the cdf for the Beta distribution with parameters `alpha` and `beta`.

#### [`betamean(alpha, beta)`](http://jstat.github.io/all.html#jStat.beta.mean)

Returns the mean of the Beta distribution with parameters `alpha` and `beta`.

#### [`betamedian(alpha, beta)`](http://jstat.github.io/all.html#jStat.beta.median)

Returns the median of the Beta distribution with parameters `alpha` and `beta`.

#### [`betamode(alpha, beta)`](http://jstat.github.io/all.html#jStat.beta.mode)

Returns the mode of the Beta distribution with parameters `alpha` and `beta`.

#### [`betasample(alpha, beta)`](http://jstat.github.io/all.html#jStat.beta.sample)

Returns a random number whose distribution is the Beta distribution with parameters `alpha` and `beta`.

#### [`betavariance(alpha, beta)`](http://jstat.github.io/all.html#jStat.beta.variance)

Returns the variance of the Beta distribution with parameters `alpha` and `beta`.

#### [`centralFpdf(x, df1, df2)`](http://jstat.github.io/all.html#jStat.centralF.pdf)

Given `x` in the range [0, infinity), returns the probability density of the (central) F distribution at `x`.

#### [`centralFcdf(x, df1, df2)`](http://jstat.github.io/all.html#jStat.centralF.cdf)

Given x in the range [0, infinity), returns the cumulative probability density of the central F distribution. That is, `jStat.centralF.cdf(2.5, 10, 20)` will return the probability that a number randomly selected from the central F distribution with `df1 = 10` and `df2 = 20` will be less than 2.5.

#### [`centralFinv(p, df1, df2)`](http://jstat.github.io/all.html#jStat.centralF.inv)

Given `p` in [0, 1), returns the value of x for which the cumulative probability density of the central F distribution is p. That is, `jStat.centralF.inv(p, df1, df2) = x` if and only if `jStat.centralF.inv(x, df1, df2) = p`.

#### [`centralFmean(df1, df2)`](http://jstat.github.io/all.html#jStat.centralF.mean)

Returns the mean of the (Central) F distribution.

#### [`centralFmode(df1, df2)`](http://jstat.github.io/all.html#jStat.centralF.mode)

Returns the mode of the (Central) F distribution.

#### [`centralFsample(df1, df2)`](http://jstat.github.io/all.html#jStat.centralF.sample)

Returns a random number whose distribution is the (Central) F distribution.

#### [`centralFvariance(df1, df2)`](http://jstat.github.io/all.html#jStat.centralF.variance)

Returns the variance of the (Central) F distribution.

#### [`cauchypdf(x, local, scale)`](http://jstat.github.io/all.html#jStat.cauchy.pdf)

Returns the value of `x` in the pdf of the Cauchy distribution with a location (median) of `local` and scale factor of `scale`.

#### [`cauchycdf(x, local, scale)`](http://jstat.github.io/all.html#jStat.cauchy.cdf)

Returns the value of `x` in the cdf of the Cauchy distribution with a location (median) of `local` and scale factor of `scale`.

#### [`cauchyinv(p, local, scale)`](http://jstat.github.io/all.html#jStat.cauchy.inv)

Returns the value of `p` in the inverse of the cdf for the Cauchy distribution with a location (median) of `local` and scale factor of `scale`.

#### [`cauchymedian(local, scale)`](http://jstat.github.io/all.html#jStat.cauchy.median)

Returns the value of the median for the Cauchy distribution with a location (median) of `local` and scale factor of `scale`.

#### [`cauchymode(local, scale)`](http://jstat.github.io/all.html#jStat.cauchy.mode)

Returns the value of the mode for the Cauchy distribution with a location (median) of `local` and scale factor of `scale`.

#### [`cauchysample(local, scale)`](http://jstat.github.io/all.html#jStat.cauchy.sample)

Returns a random number whose distribution is the Cauchy distribution with a location (median) of `local` and scale factor of `scale`.

#### [`chisquarepdf(x, dof)`](http://jstat.github.io/all.html#jStat.chisquare.pdf)

Returns the value of `x` in the pdf of the Chi Square distribution with `dof` degrees of freedom.

#### [`chisquarecdf(x, dof)`](http://jstat.github.io/all.html#jStat.chisquare.cdf)

Returns the value of `x` in the cdf of the Chi Square distribution with `dof` degrees of freedom.

#### [`chisquareinv(p, dof)`](http://jstat.github.io/all.html#jStat.chisquare.inv)

Returns the value of `x` in the inverse of the cdf for the Chi Square distribution with `dof` degrees of freedom.

#### [`chisquaremean(dof)`](http://jstat.github.io/all.html#jStat.chisquare.mean)

Returns the value of the mean for the Chi Square distribution with `dof` degrees of freedom.

#### [`chisquaremedian(dof)`](http://jstat.github.io/all.html#jStat.chisquare.median)

Returns the value of the median for the Chi Square distribution with `dof` degrees of freedom.

#### [`chisquaremode(dof)`](http://jstat.github.io/all.html#jStat.chisquare.mode)

Returns the value of the mode for the Chi Square distribution with `dof` degrees of freedom.

#### [`chisquaresample(dof)`](http://jstat.github.io/all.html#jStat.chisquare.sample)

Returns a random number whose distribution is the Chi Square distribution with `dof` degrees of freedom.

#### [`chisquarevariance(dof)`](http://jstat.github.io/all.html#jStat.chisquare.variance)

Returns the value of the variance for the Chi Square distribution with `dof` degrees of freedom.

#### [`exponentialpdf(x, rate)`](http://jstat.github.io/all.html#jStat.exponential.pdf)

Returns the value of `x` in the pdf of the Exponential distribution with the parameter `rate` (lambda).

#### [`exponentialcdf(x, rate)`](http://jstat.github.io/all.html#jStat.exponential.cdf)

Returns the value of `x` in the cdf of the Exponential distribution with the parameter `rate` (lambda).

#### [`exponentialinv(p, rate)`](http://jstat.github.io/all.html#jStat.exponential.inv)

Returns the value of `p` in the inverse of the cdf for the Exponential distribution with the parameter `rate` (lambda).

#### [`exponentialmean(rate)`](http://jstat.github.io/all.html#jStat.exponential.mean)

Returns the value of the mean for the Exponential distribution with the parameter `rate` (lambda).

#### [`exponentialmedian(rate)`](http://jstat.github.io/all.html#jStat.exponential.median)

Returns the value of the median for the Exponential distribution with the parameter `rate` (lambda)

#### [`exponentialmode(rate)`](http://jstat.github.io/all.html#jStat.exponential.mode)

Returns the value of the mode for the Exponential distribution with the parameter `rate` (lambda).

#### [`exponentialsample(rate)`](http://jstat.github.io/all.html#jStat.exponential.sample)

Returns a random number whose distribution is the Exponential distribution with the parameter `rate` (lambda).

#### [`exponentialvariance(rate)`](http://jstat.github.io/all.html#jStat.exponential.variance)

Returns the value of the variance for the Exponential distribution with the parameter `rate` (lambda).

#### [`gammapdf(x, shape, scale)`](http://jstat.github.io/all.html#jStat.gamma.pdf)

Returns the value of `x` in the pdf of the Gamma distribution with the parameters `shape` (k) and `scale` (theta). Notice that if using the alpha beta convention, `scale = 1/beta`.

#### [`gammacdf(x, shape, scale)`](http://jstat.github.io/all.html#jStat.gamma.cdf)

Returns the value of `x` in the cdf of the Gamma distribution with the parameters `shape` (k) and `scale` (theta). Notice that if using the alpha beta convention, `scale = 1/beta`.

#### [`gammainv(p, shape, scale)`](http://jstat.github.io/all.html#jStat.gamma.inv)

Returns the value of `p` in the inverse of the cdf for the Gamma distribution with the parameters `shape` (k) and `scale` (theta). Notice that if using the alpha beta convention, `scale = 1/beta`.

#### [`gammamean(shape, scale)`](http://jstat.github.io/all.html#jStat.gamma.mean)

Returns the value of the mean for the Gamma distribution with the parameters `shape` (k) and `scale` (theta). Notice that if using the alpha beta convention, `scale = 1/beta`.

#### [`gammamode(shape, scale)`](http://jstat.github.io/all.html#jStat.gamma.mode)

Returns the value of the mode for the Gamma distribution with the parameters `shape` (k) and `scale` (theta). Notice that if using the alpha beta convention, `scale = 1/beta`.

#### [`gammasample(shape, scale)`](http://jstat.github.io/all.html#jStat.gamma.sample)

Returns a random number whose distribution is the Gamma distribution with the parameters `shape` (k) and `scale` (theta). Notice that if using the alpha beta convention, `scale = 1/beta`.

#### [`gammavariance(shape, scale)`](http://jstat.github.io/all.html#jStat.gamma.variance)

Returns the value of the variance for the Gamma distribution with the parameters `shape` (k) and `scale` (theta). Notice that if using the alpha beta convention, `scale = 1/beta`.

#### [`invgammapdf(x, shape, scale)`](http://jstat.github.io/all.html#jStat.invgamma.pdf)

Returns the value of `x` in the pdf of the Inverse-Gamma distribution with parametres `shape` (alpha) and `scale` (beta).

#### [`invgammacdf(x, shape, scale)`](http://jstat.github.io/all.html#jStat.invgamma.cdf)

Returns the value of `x` in the cdf of the Inverse-Gamma distribution with parametres `shape` (alpha) and `scale` (beta).

#### [`invgammainv(p, shape, scale)`](http://jstat.github.io/all.html#jStat.invgamma.inv)

Returns the value of `p` in the inverse of the cdf for the Inverse-Gamma distribution with parametres `shape` (alpha) and `scale` (beta).

#### [`invgammamean(shape, scale)`](http://jstat.github.io/all.html#jStat.invgamma.mean)

Returns the value of the mean for the Inverse-Gamma distribution with parametres `shape` (alpha) and `scale` (beta).

#### [`invgammamode(shape, scale)`](http://jstat.github.io/all.html#jStat.invgamma.mode)

Returns the value of the mode for the Inverse-Gamma distribution with parametres `shape` (alpha) and `scale` (beta).

#### [`invgammasample(shape, scale)`](http://jstat.github.io/all.html#jStat.invgamma.sample)

Returns a random number whose distribution is the Inverse-Gamma distribution with parametres `shape` (alpha) and `scale` (beta).

#### [`invgammavariance(shape, scale)`](http://jstat.github.io/all.html#jStat.invgamma.variance)

Returns the value of the variance for the Inverse-Gamma distribution with parametres `shape` (alpha) and `scale` (beta).

#### [`kumaraswamypdf(x, alpha, beta)`](http://jstat.github.io/all.html#jStat.kumaraswamy.pdf)

Returns the value of `x` in the pdf of the Kumaraswamy distribution with parameters `a` and `b`.

#### [`kumaraswamycdf(x, alpha, beta)`](http://jstat.github.io/all.html#jStat.kumaraswamy.cdf)

Returns the value of `x` in the cdf of the Kumaraswamy distribution with parameters `alpha` and `beta`.

#### [`kumaraswamyinv(p, alpha, beta)`](http://jstat.github.io/all.html#jStat.kumaraswamy.inv)

Returns the value of `p` in the inverse of the pdf for the Kumaraswamy distribution with parametres `alpha` and `beta`.

#### [`kumaraswamymean(alpha, beta)`](http://jstat.github.io/all.html#jStat.kumaraswamy.mean)

Returns the value of the mean of the Kumaraswamy distribution with parameters `alpha` and `beta`.

#### [`kumaraswamymedian(alpha, beta)`](http://jstat.github.io/all.html#jStat.kumaraswamy.median)

Returns the value of the median of the Kumaraswamy distribution with parameters `alpha` and `beta`.

#### [`kumaraswamymode(alpha, beta)`](http://jstat.github.io/all.html#jStat.kumaraswamy.mode)

Returns the value of the mode of the Kumaraswamy distribution with parameters `alpha` and `beta`.

#### [`kumaraswamyvariance(alpha, beta)`](http://jstat.github.io/all.html#jStat.kumaraswamy.variance)

Returns the value of the variance of the Kumaraswamy distribution with parameters `alpha` and `beta`.

#### [`lognormalpdf(x, mu, sigma)`](http://jstat.github.io/all.html#jStat.lognormal.pdf)

Returns the value of `x` in the pdf of the Log-normal distribution with paramters `mu` (mean) and `sigma` (standard deviation).

#### [`lognormalcdf(x, mu, sigma)`](http://jstat.github.io/all.html#jStat.lognormal.cdf)

Returns the value of `x` in the cdf of the Log-normal distribution with paramters `mu` (mean) and `sigma` (standard deviation).

#### [`lognormalinv(p, mu, sigma)`](http://jstat.github.io/all.html#jStat.lognormal.inv)

Returns the value of `x` in the inverse of the cdf for the Log-normal distribution with paramters `mu` (mean of the Normal distribution) and `sigma` (standard deviation of the Normal distribution).

#### [`lognormalmean(mu, sigma)`](http://jstat.github.io/all.html#jStat.lognormal.mean)

Returns the value of the mean for the Log-normal distribution with paramters `mu` (mean of the Normal distribution) and `sigma` (standard deviation of the Normal distribution).

#### [`lognormalmedian(mu, sigma)`](http://jstat.github.io/all.html#jStat.lognormal.median)

Returns the value of the median for the Log-normal distribution with paramters `mu` (mean of the Normal distribution) and `sigma` (standard deviation of the Normal distribution).

#### [`lognormalmode(mu, sigma)`](http://jstat.github.io/all.html#jStat.lognormal.mode)

Returns the value of the mode for the Log-normal distribution with paramters `mu` (mean of the Normal distribution) and `sigma` (standard deviation of the Normal distribution).

#### [`lognormalsample(mu, sigma)`](http://jstat.github.io/all.html#jStat.lognormal.sample)

Returns a random number whose distribution is the Log-normal distribution with paramters `mu` (mean of the Normal distribution) and `sigma` (standard deviation of the Normal distribution).

#### [`lognormalvariance(mu, sigma)`](http://jstat.github.io/all.html#jStat.lognormal.variance)

Returns the value of the variance for the Log-normal distribution with paramters `mu` (mean of the Normal distribution) and `sigma` (standard deviation of the Normal distribution).

#### [`normalpdf(x, mean, std)`](http://jstat.github.io/all.html#jStat.normal.pdf)

Returns the value of `x` in the pdf of the Normal distribution with parameters `mean` and `std` (standard deviation).

#### [`normalcdf(x, mean, std)`](http://jstat.github.io/all.html#jStat.normal.cdf)

Returns the value of `x` in the cdf of the Normal distribution with parameters `mean` and `std` (standard deviation).

#### [`normalinv(p, mean, std)`](http://jstat.github.io/all.html#jStat.normal.inv)

Returns the value of `p` in the inverse cdf for the Normal distribution with parameters `mean` and `std` (standard deviation).

#### [`normalmean(mean, std)`](http://jstat.github.io/all.html#jStat.normal.mean)

Returns the value of the mean for the Normal distribution with parameters `mean` and `std` (standard deviation).

#### [`normalmedian(mean, std)`](http://jstat.github.io/all.html#jStat.normal.median)

Returns the value of the median for the Normal distribution with parameters `mean` and `std` (standard deviation).

#### [`normalmode(mean, std)`](http://jstat.github.io/all.html#jStat.normal.mode)

Returns the value of the mode for the Normal distribution with parameters `mean` and `std` (standard deviation).

#### [`normalsample(mean, std)`](http://jstat.github.io/all.html#jStat.normal.sample)

Returns a random number whose distribution is the Normal distribution with parameters `mean` and `std` (standard deviation).

#### [`normalvariance(mean, std)`](http://jstat.github.io/all.html#jStat.normal.variance)

Returns the value of the variance for the Normal distribution with parameters `mean` and `std` (standard deviation).

#### [`paretopdf(x, scale, shape)`](http://jstat.github.io/all.html#jStat.pareto.pdf)

Returns the value of `x` in the pdf of the Pareto distribution with parameters `scale` (x&lt;sub&gt;m&lt;/sub&gt;) and `shape` (alpha).

#### [`paretocdf(x, scale, shape)`](http://jstat.github.io/all.html#jStat.pareto.cdf)

Returns the value of `x` in the cdf of the Pareto distribution with parameters `scale` (x&lt;sub&gt;m&lt;/sub&gt;) and `shape` (alpha).

#### [`paretoinv(p, scale, shape)`](http://jstat.github.io/all.html#jStat.pareto.inv)

Returns the inverse of the Pareto distribution with probability `p`, `scale`, `shape`.

#### [`paretomean(scale, shape)`](http://jstat.github.io/all.html#jStat.pareto.mean)

Returns the value of the mean of the Pareto distribution with parameters `scale` (x&lt;sub&gt;m&lt;/sub&gt;) and `shape` (alpha).

#### [`paretomedian(scale, shape)`](http://jstat.github.io/all.html#jStat.pareto.median)

Returns the value of the median of the Pareto distribution with parameters `scale` (x&lt;sub&gt;m&lt;/sub&gt;) and `shape` (alpha).

#### [`paretomode(scale, shape)`](http://jstat.github.io/all.html#jStat.pareto.mode)

Returns the value of the mode of the Pareto distribution with parameters `scale` (x&lt;sub&gt;m&lt;/sub&gt;) and `shape` (alpha).

#### [`paretovariance(scale, shape)`](http://jstat.github.io/all.html#jStat.pareto.variance)

Returns the value of the variance of the Pareto distribution with parameters `scale` (x&lt;sub&gt;m&lt;/sub&gt;) and `shape` (alpha).

#### [`studenttpdf(x, dof)`](http://jstat.github.io/all.html#jStat.studentt.pdf)

Returns the value of `x` in the pdf of the Student's T distribution with `dof` degrees of freedom.

#### [`studenttcdf(x, dof)`](http://jstat.github.io/all.html#jStat.studentt.cdf)

Returns the value of `x` in the cdf of the Student's T distribution with `dof` degrees of freedom.

#### [`studenttinv(p, dof)`](http://jstat.github.io/all.html#jStat.studentt.inv)

Returns the value of `p` in the inverse of the cdf for the Student's T distribution with `dof` degrees of freedom.

#### [`studenttmean(dof)`](http://jstat.github.io/all.html#jStat.studentt.mean)

Returns the value of the mean of the Student's T distribution with `dof` degrees of freedom.

#### [`studenttmedian(dof)`](http://jstat.github.io/all.html#jStat.studentt.median)

Returns the value of the median of the Student's T distribution with `dof` degrees of freedom.

#### [`studenttmode(dof)`](http://jstat.github.io/all.html#jStat.studentt.mode)

Returns the value of the mode of the Student's T distribution with `dof` degrees of freedom.

#### [`studenttsample(dof)`](http://jstat.github.io/all.html#jStat.studentt.sample)

Returns a random number whose distribution is the Student's T distribution with `dof` degrees of freedom.

#### [`studenttvariance(dof)`](http://jstat.github.io/all.html#jStat.studentt.variance)

Returns the value of the variance for the Student's T distribution with `dof` degrees of freedom.

#### [`weibullpdf(x, scale, shape)`](http://jstat.github.io/all.html#jStat.weibull.pdf)

Returns the value `x` in the pdf for the Weibull distribution with parameters `scale` (lambda) and `shape` (k).

#### [`weibullcdf(x, scale, shape)`](http://jstat.github.io/all.html#jStat.weibull.cdf)

Returns the value `x` in the cdf for the Weibull distribution with parameters `scale` (lambda) and `shape` (k).

#### [`weibullinv(p, scale, shape)`](http://jstat.github.io/all.html#jStat.weibull.inv)

Returns the value of `x` in the inverse of the cdf for the Weibull distribution with parameters `scale` (lambda) and `shape` (k).

#### [`weibullmean(scale, shape)`](http://jstat.github.io/all.html#jStat.weibull.mean)

Returns the value of the mean of the Weibull distribution with parameters `scale` (lambda) and `shape` (k).

#### [`weibullmedian(scale, shape)`](http://jstat.github.io/all.html#jStat.weibull.median)

Returns the value of the median of the Weibull distribution with parameters `scale` (lambda) and `shape` (k).

#### [`weibullmode(scale, shape)`](http://jstat.github.io/all.html#jStat.weibull.mode)

Returns the mode of the Weibull distribution with parameters `scale` (lambda) and `shape` (k).

#### [`weibullsample(scale, shape)`](http://jstat.github.io/all.html#jStat.weibull.sample)

Returns a random number whose distribution is the Weibull distribution with parameters `scale` (lambda) and `shape` (k).

#### [`weibullvariance(scale, shape)`](http://jstat.github.io/all.html#jStat.weibull.variance)

Returns the variance of the Weibull distribution with parameters `scale` (lambda) and `shape` (k).

#### [`uniformpdf(x, a, b)`](http://jstat.github.io/all.html#jStat.uniform.pdf)

Returns the value of `x` in the pdf of the Uniform distribution from `a` to `b`.

#### [`uniformcdf(x, a, b)`](http://jstat.github.io/all.html#jStat.uniform.cdf)

Returns the value of `x` in the cdf of the Uniform distribution from `a` to `b`.

#### [`uniforminv(p, a, b)`](http://jstat.github.io/all.html#jStat.uniform.inv)

Returns the inverse of the `uniform.cdf` function; i.e. the value of `x` for which `uniform.cdf(x, a, b) == p`.

#### [`uniformmean(a, b)`](http://jstat.github.io/all.html#jStat.uniform.mean)

Returns the value of the mean of the Uniform distribution from `a` to `b`.

#### [`uniformmedian(a, b)`](http://jstat.github.io/all.html#jStat.uniform.median)

Returns the value of the median of the Uniform distribution from `a` to `b`.

#### [`uniformmode(a, b)`](http://jstat.github.io/all.html#jStat.uniform.mode)

Returns the value of the mode of the Uniform distribution from `a` to `b`.

#### [`uniformsample(a, b)`](http://jstat.github.io/all.html#jStat.uniform.sample)

Returns a random number whose distribution is the Uniform distribution from `a` to `b`.

#### [`uniformvariance(a, b)`](http://jstat.github.io/all.html#jStat.uniform.variance)

Returns the variance of the Uniform distribution from `a` to `b`.

#### [`binomialpdf(x, n, p)`](http://jstat.github.io/all.html#jStat.binomial.pdf)

Returns the value of `k` in the pdf of the Binomial distribution with parameters `n` and `p`.

#### [`binomialcdf(x, n, p)`](http://jstat.github.io/all.html#jStat.binomial.cdf)

Returns the value of `k` in the cdf of the Binomial distribution with parameters `n` and `p`.

#### [`geometricpdf(x, p)`](http://jstat.github.io/all.html#jStat.geometric.pdf)

#### [`geometriccdf(x, p)`](http://jstat.github.io/all.html#jStat.geometric.cdf)

#### [`geometricmean(p)`](http://jstat.github.io/all.html#jStat.geometric.mean)

#### [`geometricmedian(p)`](http://jstat.github.io/all.html#jStat.geometric.median)

#### [`geometricmode(p)`](http://jstat.github.io/all.html#jStat.geometric.mode)

#### [`geometricsample(p)`](http://jstat.github.io/all.html#jStat.geometric.sample)

#### [`geometricvariance(p)`](http://jstat.github.io/all.html#jStat.geometric.variance)

#### [`negbinpdf(x, r, p)`](http://jstat.github.io/all.html#jStat.negbin.pdf)

Returns the value of `k` in the pdf of the Negative Binomial distribution with parameters `n` and `p`.

#### [`negbincdf(x, r, p)`](http://jstat.github.io/all.html#jStat.negbin.cdf)

Returns the value of `x` in the cdf of the Negative Binomial distribution with parameters `n` and `p`.

#### [`hypgeompdf(x, population_size, success_rate, num_draws)`](http://jstat.github.io/all.html#jStat.hypgeom.pdf)

Returns the value of `k` in the pdf of the Hypergeometric distribution with parameters `N` (the population size), `m` (the success rate), and `n` (the number of draws).

#### [`hypgeomcdf(x, population_size, success_rate, num_draws)`](http://jstat.github.io/all.html#jStat.hypgeom.cdf)

Returns the value of `x` in the cdf of the Hypergeometric distribution with parameters `N` (the population size), `m` (the success rate), and `n` (the number of draws).

#### [`poissonpdf(x, l)`](http://jstat.github.io/all.html#jStat.poisson.pdf)

Returns the value of `k` in the pdf of the Poisson distribution with parameter `l` (lambda).

#### [`poissoncdf(x, l)`](http://jstat.github.io/all.html#jStat.poisson.cdf)

Returns the value of `x` in the cdf of the Poisson distribution with parameter `l` (lambda).

#### [`poissonmean(l)`](http://jstat.github.io/all.html#jStat.poisson.mean)

#### [`poissonsample(l)`](http://jstat.github.io/all.html#jStat.poisson.sample)

Returns a random number whose distribution is the Poisson distribution with rate parameter l (lamda)

#### [`poissonvariance(l)`](http://jstat.github.io/all.html#jStat.poisson.variance)

#### [`triangularpdf(x, a, b, c)`](http://jstat.github.io/all.html#jStat.triangular.pdf)

Returns the value of `x` in the pdf of the Triangular distribution with the parameters `a`, `b`, and `c`.

#### [`triangularcdf(x, a, b, c)`](http://jstat.github.io/all.html#jStat.triangular.cdf)

Returns the value of `x` in the cdf of the Triangular distribution with the parameters `a`, `b`, and `c`.

#### [`triangularinv(p, a, b, c)`](http://jstat.github.io/all.html#jStat.triangular.inv)

#### [`triangularmean(a, b, c)`](http://jstat.github.io/all.html#jStat.triangular.mean)

Returns the value of the mean of the Triangular distribution with the parameters `a`, `b`, and `c`.

#### [`triangularmedian(a, b, c)`](http://jstat.github.io/all.html#jStat.triangular.median)

Returns the value of the median of the Triangular distribution with the parameters `a`, `b`, and `c`.

#### [`triangularmode(a, b, c)`](http://jstat.github.io/all.html#jStat.triangular.mode)

Returns the value of the mode of the Triangular distribution with the parameters `a`, `b`, and `c`.

#### [`triangularsample(a, b, c)`](http://jstat.github.io/all.html#jStat.triangular.sample)

Returns a random number whose distribution is the Triangular distribution with the parameters `a`, `b`, and `c`.

#### [`triangularvariance(a, b, c)`](http://jstat.github.io/all.html#jStat.triangular.variance)

Returns the value of the variance of the Triangular distribution with the parameters `a`, `b`, and `c`.

### Statistical Tests

#### [`zScore(value, mean, sd)`](http://jstat.github.io/all.html#jStat.zscore)

Returns the z-score of `value` given the data from `array`. `flag===true` denotes
use of the sample standard deviation.

#### [`zScore(value, array)`](http://jstat.github.io/all.html#jStat.zscore)

Returns the z-score of `value` given the data from `array`. `flag===true` denotes
use of the sample standard deviation.

#### [`zTest(value, mean, sd, sides)`](http://jstat.github.io/all.html#jStat.ztest)

Returns the p-value of `value` given the data from `array`. `sides` is
an integer value 1 or 2 denoting a one or two sided z-test. If `sides`
is not specified the test defaults to a two sided z-test. `flag===true`
denotes the use of the sample standard deviation.

#### [`zTest(zscore, sides)`](http://jstat.github.io/all.html#jStat.ztest)

Returns the p-value of `value` given the data from `array`. `sides` is
an integer value 1 or 2 denoting a one or two sided z-test. If `sides`
is not specified the test defaults to a two sided z-test. `flag===true`
denotes the use of the sample standard deviation.

#### [`tScore(value, mean, sd, n)`](http://jstat.github.io/all.html#jStat.tscore)

Returns the t-score of `value` given the data from `array`.

#### [`tScore(value, array)`](http://jstat.github.io/all.html#jStat.tscore)

Returns the t-score of `value` given the data from `array`.

#### [`tTest(value, mean, sd, n, sides)`](http://jstat.github.io/all.html#jStat.ttest)

Returns the p-value of `value` given the data in `array`.
`sides` is an integer value 1 or 2 denoting a one or two sided
t-test. If `sides` is not specified the test defaults to a two
sided t-test.

#### [`tTest(tscore, n, sides)`](http://jstat.github.io/all.html#jStat.ttest)

Returns the p-value of `value` given the data in `array`.
`sides` is an integer value 1 or 2 denoting a one or two sided
t-test. If `sides` is not specified the test defaults to a two
sided t-test.

#### [`tTest(value, array, sides)`](http://jstat.github.io/all.html#jStat.ttest)

Returns the p-value of `value` given the data in `array`.
`sides` is an integer value 1 or 2 denoting a one or two sided
t-test. If `sides` is not specified the test defaults to a two
sided t-test.

#### [`anovaFScore(array1, ..., arrayN)`](http://jstat.github.io/all.html#jStat.anovafscore)

Returns the f-score of an ANOVA on the arrays.

#### [`anovaFTest(array1, ..., arrayN)`](http://jstat.github.io/all.html#jStat.anovaftest)

Returns the p-value of the f-statistic from the ANOVA
test on the arrays.

#### [`ftest(fscore, df1, df2)`](http://jstat.github.io/all.html#jStat.ftest)

Returns the p-value for the `fscore` f-score with a `df1` numerator degrees
of freedom and a `df2` denominator degrees of freedom.

### Confidence intervals

#### [`normalci(value, alpha, sd, n)`](http://jstat.github.io/all.html#jStat.normalci)

Returns a 1-alpha confidence interval for `value` given
a normal distribution in the data from `array`.

#### [`normalci(value, alpha, array)`](http://jstat.github.io/all.html#jStat.normalci)

Returns a 1-alpha confidence interval for `value` given
a normal distribution in the data from `array`.

#### [`tci(value, alpha, sd, n)`](http://jstat.github.io/all.html#jStat.tci)

Returns a 1-alpha confidence interval for `value` given
the data from `array`.

#### [`tci(value, alpha, array)`](http://jstat.github.io/all.html#jStat.tci)

Returns a 1-alpha confidence interval for `value` given
the data from `array`.

### Special functions

#### [`betafn(x, y)`](http://jstat.github.io/all.html#betafn)

Evaluates the Beta function at `(x,y)`.

#### [`betaln(x, y)`](http://jstat.github.io/all.html#betaln)

Evaluates the log Beta function at `(x,y)`.

#### [`betacf(x, a, b)`](http://jstat.github.io/all.html#betacf)

Returns the continued fraction for the incomplete Beta function with parameters a and b modified by Lentz's method evaluated at `x`.

#### [`ibetainv(p, a, b)`](http://jstat.github.io/all.html#ibetainv)

Returns the inverse of the incomplete Beta function evaluated at `(p,a,b)`.

#### [`ibeta(x, a, b)`](http://jstat.github.io/all.html#ibeta)

Returns the incomplete Beta function evaluated at `(x,a,b)`.

#### [`gammaln(x)`](http://jstat.github.io/all.html#gammaln)

Returns the Log-Gamma function evaluated at `x`.

#### [`gammafn(x)`](http://jstat.github.io/all.html#gammafn)

Returns the Gamma function evaluated at `x`. This is sometimes called the 'complete' gamma function.

#### [`gammap(a, x)`](http://jstat.github.io/all.html#gammap)

Returns the lower incomplete gamma function evaluated at `(a,x)`.
This function is usually written with a lower case greek gamma character, and is one of the two <a href="http://mathworld.wolfram.com/IncompleteGammaFunction.html">incomplete gamma functions</a>.

#### [`factorialln(n)`](http://jstat.github.io/all.html#factorialln)

Returns the natural log factorial of `n`.

#### [`factorial(n)`](http://jstat.github.io/all.html#factorial)

Returns the factorial of `n`.

#### [`combination(n, m)`](http://jstat.github.io/all.html#combination)

Returns the number of combinations of `n`, `m`.

#### [`permutation(permutation)`](http://jstat.github.io/all.html#permutation)

Returns the number of permutations of `n`, `m`.

#### [`gammapinv(p, a)`](http://jstat.github.io/all.html#gammapinv)

Returns the inverse of the lower regularized incomplete Gamma function evaluated at `(p,a)`.
This function is the inverse of lowerRegularizedGamma(x, a).

#### [`erf(x)`](http://jstat.github.io/all.html#erf)

Returns the error function evaluated at `x`.

#### [`erfc(x)`](http://jstat.github.io/all.html#erfc)

Returns the complementary error function evaluated at `x`.

#### [`erfcinv(p)`](http://jstat.github.io/all.html#erfcinv)

Returns the inverse of the complementary error function evaluated at `p`.

#### [`randn(n, m)`](http://jstat.github.io/all.html#randn)

Returns a normal deviate (mean 0 and standard deviation 1).

#### [`randg(shape, n, m)`](http://jstat.github.io/all.html#randg)

Returns a Gamma deviate by the method of Marsaglia and Tsang.

### Data binning

#### `bin(data, num_bins, [range])`

Put the list of numbers `data` into bins of equal size.
The number of bins is given by `num_bins`.
If `range` is given, then the bins span that range; otherwise they span the same range as the given data, with the first bin starting at the minimum value and the last bin ending at the maximum.

**Examples:**

* `bin([1,2,3,4,5,6,7], 3)` → `[ [1,2], [3,4], [5,6,7] ]`
* `bin([1,2,3,4,5,6,7], 3, 1..10)` → `[ [1,2,3], [4,5,6], [7] ]`
* `bin([1,7,9], 3)` → `[ [1], [], [7,9] ]`
