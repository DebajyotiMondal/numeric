/*
 * Some stress tests
<pre>
> Math.seedrandom("stress"); numeric.digits(18); n = numeric; trunc = function(z) { return n.mul(1e-10,n.round(n.mul(1e10,z))); }; m = 12;
12
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); trunc(n.dot(V,n.inv(V)));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); trunc(n.abs(n.dot(V,n.inv(V))));
t([[1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1]])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.sub(n.random(m,m),0.5); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> V = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); D = n.random(m); A = n.dot(V,n.dot(n.diag(D),n.inv(V))); E = n.eig(A); trunc(n.abs(n.sub(n.sortVector(D),n.sortVector(E.d))));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
> A = n.add(n.sub(n.random(m,m),0.5),n.mul(n.i,n.sub(n.random(m,m),0.5))); E = n.eig(A); trunc(n.norm2(n.sub(n.dot(A,E.v),n.dot(E.v,n.diag(E.d)))));
t(0)
</pre>
 */

/*
 * QP tests
<pre >
> A = [[62,-67,29,-87,-15,16,69,12,36,97,26,56,],[80,58,-24,36,-80,8,12,70,-73,-65,-29,38,],[-74,-37,62,-91,20,73,85,-30,44,-48,98,-97,],[82,6,6,-85,-6,-47,39,-11,-77,-20,-55,68,],[26,-66,-30,4,39,-36,16,-88,-76,-84,30,84,],[-80,20,87,-80,40,-75,62,-64,28,36,21,54,],[-44,-47,74,63,27,87,75,32,-34,-19,-22,-91,],[9,31,10,63,-92,29,97,-33,30,96,-71,-24,],[91,37,24,44,-85,-4,-99,79,49,-19,-94,40,],[92,49,17,-69,-36,28,72,-76,16,24,-16,45,],[-68,-10,-58,32,6,9,22,97,48,-68,-63,-55,],[93,-82,-39,4,31,29,97,8,-53,-23,45,-46,],[91,-54,-6,94,-18,9,5,41,47,-67,-26,34,],[-3,82,-53,30,63,44,-4,99,93,51,68,-4,],[59,-69,68,59,43,4,60,-42,73,73,46,24,],[-71,65,-60,-9,93,98,-54,-17,-82,-30,14,-52,],[-15,8,-54,-13,6,-56,0,-7,-26,37,-64,-64,],[82,98,-65,64,-35,-78,79,52,-26,-41,91,65,],[58,-84,-54,-82,-78,-77,15,63,37,6,-46,53,],[91,-11,-13,-73,22,-86,68,-79,19,66,84,86,],[31,-78,-37,-65,55,-19,47,-64,57,19,-55,-78,],[-92,91,84,-22,-15,-10,17,-28,-26,-33,-25,-63,],[69,-98,-14,66,-81,-27,-50,-88,-58,-40,-82,-79,],[86,54,-62,60,-46,52,33,4,-82,-9,28,-2,],[35,63,80,-87,-69,25,-82,-33,54,-15,-63,-61,],[51,73,95,-20,-43,54,25,-64,-58,-28,-90,78,],[48,-82,-12,5,-12,86,32,-58,-22,12,44,-79,],[-21,-20,-77,-16,5,94,45,80,10,48,-30,-90,],[31,-48,-48,31,-8,-61,77,35,-54,-15,32,11,],[-65,59,-18,25,74,-72,95,-6,28,-14,-23,54,],[41,-14,19,-41,4,39,53,82,-3,-74,25,-37,],[-93,81,-47,-14,88,-80,16,-78,-69,-94,-95,-64,],[-44,-63,20,-96,27,5,85,49,56,-42,81,-32,],[-90,-47,42,96,91,6,16,47,-79,-36,60,-57,],[-80,-70,-55,-66,-51,72,-96,12,-41,30,49,2,],[64,-72,-76,-78,35,-3,-75,-63,-52,90,62,80,],[39,73,-40,-25,-42,-21,72,19,6,86,-23,26,],[-36,16,-36,-60,34,34,-3,-40,-81,-8,23,-79,],[89,10,-15,-2,39,48,68,-72,-19,-51,15,-22,],[-92,-70,2,-32,-86,4,-58,-57,-78,52,6,-88,],[-12,70,-82,89,-49,-30,10,78,-77,51,-45,0,],[-23,24,-47,83,-55,-69,26,-85,56,48,-50,-14,],[53,-30,60,-89,33,17,-93,-51,-41,48,-10,99,],[58,3,-93,47,68,-47,23,-88,20,-78,-54,62,],[-62,-19,85,-46,-31,-90,-27,-12,92,36,60,-3,],[-2,-84,46,-15,56,50,-89,-96,-13,-7,96,78,],[-11,-51,-2,9,35,-51,-2,79,39,-57,-93,-72,],[29,-75,16,88,-98,-11,-61,-60,51,-79,7,-22,],[41,-63,-52,-16,20,37,-75,-81,-13,64,-82,85,],[50,-51,-8,96,-22,-28,-58,-38,31,-64,60,83,],[-44,-16,92,-39,82,47,-70,-9,-77,-67,97,42,],[36,-89,9,40,-99,-21,-62,-79,86,33,-86,23,],[31,80,4,33,-7,36,-91,98,-62,78,87,-31,],[-67,88,-53,8,-15,40,27,-33,-46,3,-95,86,],[-75,-2,-2,39,-8,-11,-43,-40,59,40,36,-74,],[0,-2,25,33,53,-95,8,-87,-2,-69,56,46,],[91,-32,35,-64,-35,-33,39,-40,53,90,7,29,],[-32,79,-21,-74,56,-15,0,-90,-21,8,76,66,],[17,-26,-26,99,-6,-45,7,1,-45,36,79,-20,],[-55,-77,97,-65,-92,-60,-11,52,-92,-92,25,49,],[50,55,-92,-93,-64,64,-74,26,34,61,-72,66,],[-48,-22,76,12,44,-14,-2,-81,-14,49,-56,-35,],[1,-51,82,76,-5,77,70,-83,-10,-75,-63,10,],[39,-19,59,33,-69,-22,74,55,22,5,-91,95,],[77,-80,-79,-61,-31,53,-45,80,-87,-34,-78,10,],[91,-73,-47,-26,21,-20,-58,7,-36,9,23,-34,],[9,88,-33,-8,-61,61,13,-77,54,-20,87,24,],[-72,90,36,95,47,51,28,65,39,-17,-29,-28,],[-69,15,-72,-68,-51,-24,-16,-32,-74,-63,-18,51,],[-48,-87,44,70,83,-56,-58,-41,-73,-48,96,-17,],[67,-53,-78,29,-46,58,89,49,-81,-95,88,-2,],[-49,-29,30,-24,53,89,-83,-97,-97,84,35,39,],[62,64,-1,-61,-62,-34,-78,-89,-15,30,97,94,],[-51,-96,55,-14,-42,34,-71,33,31,86,53,-34,],[85,-90,43,-4,-81,-12,-66,20,44,-67,-32,67,],[-30,-66,80,-75,15,66,24,5,6,83,32,47,],[-60,30,77,18,36,53,15,45,-77,58,-51,90,],[-49,46,-33,-54,9,-66,-89,41,26,15,-40,-93,],[23,29,39,-23,-15,72,85,56,-74,-12,36,-28,],[-5,-10,-60,16,29,97,45,-42,-72,-48,6,32,],[-29,9,-93,-49,29,3,47,38,-79,50,-18,-43,],[66,-40,48,-41,35,76,-86,11,-71,-54,20,-53,],[17,48,0,23,27,17,71,-20,-66,-86,50,42,],[10,-62,-4,-46,88,-68,86,-87,-60,53,17,25,],[83,37,80,64,-58,-59,96,55,-36,34,10,18,],[-42,-63,22,96,41,-18,71,-32,-36,43,17,32,],[51,-26,23,46,-52,49,57,21,-56,28,2,-90,],[50,25,71,-31,-75,64,3,48,-49,-16,-83,-30,],[-24,55,60,17,21,57,-64,-78,78,-22,43,-10,],[13,-83,15,-78,-10,-36,-20,-74,40,63,98,-51,],[-84,85,-63,80,-8,7,-72,10,11,-36,-29,43,],[-88,55,-51,75,32,-81,-93,-3,-62,62,93,71,],[6,-3,77,63,54,-77,87,77,-57,57,-30,-43,],[55,-13,-93,-47,-30,-72,-39,59,-84,70,77,46,],[86,-11,-2,19,32,35,-40,46,82,1,-9,-72,],[-73,-38,-66,-95,-17,-1,-33,-89,41,27,-17,67,],[14,2,95,-15,68,-61,-7,-85,11,89,-56,-72,],[-6,2,42,-37,66,-1,29,-81,-37,-11,-74,17,],[-97,63,0,-67,-48,-70,-94,59,-66,-87,-38,-27,],[-32,58,-6,-64,22,-88,68,88,24,73,45,61,],]; b=[-232,4322,26594,6648,-1865,3976,14438,7518,-1904,15203,2018,-192,-8053,-17689,-12175,7271,-2540,-18499,-4034,-12125,4873,23135,8746,36,28813,26042,10490,5381,-10424,-9599,12058,9420,9092,-8852,7613,-13731,-2531,13460,9381,14609,-13500,-7225,3265,-9873,-944,-2260,-2554,5211,-4677,-13429,8221,1461,-11393,10136,-2394,-7897,470,1519,-18747,16976,5781,5377,20234,1731,6888,-7938,12793,483,12709,-13787,5077,5406,285,-807,4774,6839,1427,-250,16075,9758,-1160,13711,5269,-6929,-4605,-12499,8466,24555,9063,819,-5033,-28742,-13302,-19868,-5035,7679,-40,10485,14555,-14146,]; c=[1,-2,75,-29,-10,92,-91,94,-62,33,17,35,]; x=[-26.6041,22.3615,54.9466,-98.2823,-80.9933,90.3914,30.0649,-59.0631,-15.3516,-76.2830,-42.8881,-51.6813,]; x1=numeric.LP(A,b,c); numeric.round(numeric.mul(100,numeric.sub(x,x1)));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> A = [[76,46,87,-88,60,90,-92,-12,91,-69,-18,46,],[-43,-14,-55,95,-10,8,76,87,8,69,87,-12,],[34,38,-3,-43,-23,8,-18,-98,-93,56,-48,-24,],[33,88,-25,19,57,-37,-92,22,39,-45,7,95,],[-75,56,5,92,-27,-85,49,60,4,-54,90,-20,],[-18,41,-47,-62,6,-63,-68,-53,-87,-35,-46,-12,],[-44,-77,-85,-61,42,-81,-71,86,77,65,-49,-68,],[43,-22,-13,-31,74,-7,21,52,-34,64,85,-34,],[-43,18,-65,86,-34,-97,-49,65,-54,14,-85,-37,],[78,-8,-94,-22,30,82,-35,15,-76,14,-40,78,],[65,-89,90,-45,94,28,-19,58,-37,-42,18,-50,],[-22,-54,-14,-69,-84,-99,-19,-34,-54,39,-59,-37,],[0,66,91,-20,17,-93,-23,-55,30,59,27,-18,],[39,-96,52,-25,-17,-58,22,-37,-86,-12,59,41,],[66,72,-98,-73,-38,-9,-66,17,-44,-11,0,-71,],[22,-84,36,-13,-47,-74,-62,65,-43,-7,30,74,],[15,33,41,-81,51,-97,-80,-41,75,-44,59,-83,],[-34,0,29,23,98,45,-35,-19,-11,35,-53,-8,],[-9,-56,10,-97,-62,-29,53,72,51,80,20,-93,],[42,14,-56,15,56,56,-53,23,20,81,-77,50,],[76,-75,54,57,-60,-13,48,97,56,49,3,40,],[44,34,-54,-52,97,-13,38,-59,-76,-47,67,-57,],[-95,20,-26,-10,60,-89,64,65,95,38,83,36,],[35,-88,77,14,-15,-89,65,35,69,-73,0,11,],[-12,-88,71,-87,45,-81,-41,-50,-89,-75,-44,69,],[-12,-69,-19,-1,0,19,-38,-5,-7,-61,30,12,],[-76,-95,-36,28,61,-51,5,-20,-35,-70,83,80,],[62,-13,22,-55,-28,68,-35,20,26,17,2,-16,],[-35,66,81,67,-84,71,66,60,-53,-84,94,-28,],[-50,23,81,93,18,92,61,-78,16,64,-60,-2,],[-31,4,18,69,81,-2,11,64,20,44,-77,-48,],[-25,72,-33,1,-61,-55,-47,68,20,84,-40,85,],[9,-80,70,-44,-13,-54,36,-29,-10,-1,-21,-7,],[12,81,-11,49,49,7,-53,-14,-92,31,-16,-49,],[-21,-78,80,-52,-91,52,-9,14,3,77,-37,-14,],[-20,3,-92,91,88,-30,-23,40,-18,8,38,40,],[3,-71,6,24,52,-8,8,48,-78,-43,-81,-19,],[31,12,43,20,12,28,97,51,-8,94,-19,-63,],[89,-98,-63,-65,-63,83,51,-22,-10,-92,-41,71,],[44,53,-32,-81,0,-67,95,-14,10,-34,-38,17,],[-20,69,-62,-48,4,43,-53,90,60,94,-78,-25,],[66,83,-35,71,98,15,6,14,40,-27,19,-55,],[-72,96,-19,81,70,-13,-89,69,74,-38,-43,-56,],[-87,1,10,40,92,76,51,-44,-89,-75,-68,4,],[-82,-45,-89,45,35,-21,20,24,-56,82,-99,-13,],[-67,-79,10,-53,-19,-64,71,17,-8,-72,-43,48,],[-35,2,-45,15,86,26,97,92,91,-33,10,-85,],[-39,17,-51,62,-4,25,85,-82,57,79,73,69,],[-97,52,-51,-19,-53,-34,-18,0,-10,0,-91,36,],[8,-83,-68,97,-21,60,-99,4,-33,23,80,-72,],[-80,32,90,-81,41,99,8,-81,-87,16,-73,71,],[-70,3,86,-35,12,95,-58,80,48,39,66,-59,],[26,-65,63,2,51,-74,-56,76,1,-93,59,21,],[71,87,45,-87,98,-53,-34,-12,-59,6,83,9,],[94,18,-64,45,92,-94,-80,56,-14,-93,-72,-67,],[14,-12,-28,11,7,21,49,-70,-66,65,1,-98,],[98,87,-62,6,92,-77,49,24,50,-32,-19,54,],[11,31,-99,65,-76,-18,9,-47,-26,69,-65,52,],[3,-10,-36,71,-89,76,-32,-11,87,-50,15,-16,],[-34,67,40,57,-39,10,66,68,-96,16,21,-88,],[-14,6,25,-36,16,-26,10,-60,65,87,-57,17,],[-2,11,9,-9,6,-58,91,-39,25,-90,4,-65,],[-85,36,-12,50,79,-12,78,-3,8,-88,97,45,],[77,-26,-42,-77,8,90,-28,-32,30,-95,-2,7,],[-86,-52,0,-77,-13,-74,9,59,45,36,39,-49,],[-13,16,52,-46,8,-6,-30,97,-80,20,-18,83,],[65,73,52,5,42,71,24,-68,75,-76,-92,51,],[-21,-18,15,94,-96,-90,59,-52,-96,59,-41,77,],[22,-77,49,42,60,38,49,40,-41,23,60,-85,],[63,-11,29,-37,-71,95,-74,-25,-63,-85,-30,-63,],[76,-40,-75,-41,-4,-43,64,94,84,-85,-83,47,],[85,-20,1,69,-48,-73,-94,94,-86,-72,2,39,],[-61,66,-30,82,-26,37,-17,28,16,57,-26,55,],[-48,-19,-81,28,32,81,46,71,27,-81,47,0,],[79,-22,-70,-48,-65,22,56,-19,30,-52,5,-15,],[18,-28,-60,-81,-44,79,-26,26,72,-51,60,22,],[1,-71,34,67,-60,-61,48,96,-88,-78,63,70,],[22,-47,-14,17,-60,50,78,12,63,71,-61,34,],[63,-82,38,89,-34,-30,-51,86,6,39,-75,5,],[6,-14,-48,-87,75,-16,-73,44,38,46,64,-40,],[-59,-48,-97,17,-6,-68,-54,-3,-57,30,27,40,],[-9,-40,6,-43,-19,63,-30,28,9,3,-96,-23,],[-14,-15,-44,65,-64,25,-42,77,40,-34,78,13,],[92,-75,88,-61,93,47,85,-60,90,32,3,77,],[24,-1,80,-11,-18,60,-89,-21,-11,-76,9,68,],[39,41,-21,-21,68,-86,18,97,-82,-70,21,79,],[44,-51,-94,65,23,89,-67,-19,-88,-95,52,87,],[-30,56,34,35,-24,0,67,31,26,92,70,62,],[3,-84,67,-58,75,51,-66,79,59,93,-23,-99,],[11,-21,93,-36,56,48,0,98,38,-74,-82,-98,],[-68,-98,-88,-73,-7,66,99,30,-31,-6,46,-82,],[12,-55,-10,34,62,-68,-29,-78,88,31,-33,-47,],[39,-99,16,14,79,-8,-90,-92,4,-42,67,-94,],[-15,-62,37,-65,-14,23,-57,23,90,50,-25,-15,],[67,-71,43,-70,-33,86,-20,13,-84,12,65,-31,],[46,-46,30,-5,19,66,-33,91,-58,-14,-64,8,],[-28,-64,45,81,80,78,-54,49,54,-46,-73,84,],[-9,-72,-25,10,40,16,86,32,82,50,75,-40,],[-22,20,16,-92,-24,16,36,5,56,79,-90,-32,],[55,79,-76,-88,47,70,91,-48,-40,45,37,71,],]; b=[7588,2243,-2111,-6045,4283,-5978,229,4377,-1151,-5731,14081,-3674,1995,-4245,-532,580,471,3894,10626,-1908,6952,-5617,-3679,1544,-6324,-1117,-10751,7281,17247,6594,7823,-2331,1358,2768,12423,-8654,3835,11834,-6456,-5857,8261,1676,7405,2593,-4957,-2811,8739,-12737,-2374,829,5703,22315,3701,1003,-1184,-594,-9250,-12015,2719,16445,-4609,-1425,-3338,-1312,5326,8917,524,-9648,10671,11392,-4536,2883,460,3715,-5319,1748,3703,270,5744,602,-11126,8667,2905,-2240,6325,-2394,-8557,2678,16860,22128,3617,-8949,-2374,6631,9600,10855,5022,885,5753,-8607,]; c=[-32,-72,2,71,-23,39,25,-10,-5,89,-82,-44,]; x=[-9.0091,20.9603,75.1991,-6.3952,-10.1281,46.1814,-3.6512,70.9091,-6.0576,-1.6772,-2.1331,-52.8939,]; x1=numeric.LP(A,b,c); numeric.round(numeric.mul(100,numeric.sub(x,x1)));
t([0,0,0,0,0,0,0,0,0,0,0,0])
> A = [[-65,-52,95,-51,-91,59,-96,-58,86,-71,-24,68,],[-20,19,3,76,90,56,40,-32,-20,1,1,3,],[39,-4,98,42,48,-29,1,15,-89,22,52,-69,],[-59,79,-9,-24,87,-88,-24,-3,14,40,-89,-24,],[33,86,-15,-50,3,41,-86,-47,49,-23,45,64,],[-11,63,-57,-49,-51,98,-28,16,-36,45,40,-65,],[-13,41,-61,53,-48,-67,-53,75,-1,77,-8,-34,],[-64,48,66,-89,51,-77,-59,-87,-55,-88,16,92,],[-61,79,45,37,98,82,62,-12,87,-72,-32,61,],[23,-86,6,24,-28,-4,-21,-82,-4,72,-65,-55,],[-46,-32,65,49,50,70,-88,13,8,-15,-20,99,],[12,-98,2,94,-77,61,-25,8,-55,-18,83,-86,],[88,65,10,-23,19,-62,54,53,-80,91,-54,-15,],[42,1,-57,-47,-14,-50,-66,-53,-87,50,-28,-19,],[35,-26,17,75,46,-88,82,17,63,95,-35,-20,],[91,-54,-71,61,-47,22,-36,-8,54,-53,-82,-77,],[55,7,-89,-8,-80,55,-34,71,-60,-80,3,-15,],[21,-42,36,-81,-10,2,-59,32,78,-23,66,22,],[89,-85,21,13,28,-94,53,-29,36,0,80,97,],[-87,-82,-56,-62,-73,97,-85,-30,31,14,44,-55,],[-46,-85,-19,6,-9,0,89,-49,97,94,-23,-29,],[96,-18,26,-29,30,-33,-68,90,-92,-1,-40,-46,],[54,-75,11,-37,65,-65,-42,-40,-15,-20,38,-41,],[-5,-11,-74,45,-38,25,37,-68,-2,98,75,-62,],[36,79,-65,3,-19,15,-71,-27,17,-47,84,-94,],[-16,-29,-99,58,76,50,2,48,-83,33,-83,-10,],[-24,-75,-16,-59,40,-69,44,41,32,92,-3,-51,],[-57,14,-2,35,-51,-28,85,40,-89,34,-74,73,],[-23,74,-67,-89,51,-70,46,-98,11,-40,-49,6,],[-93,-30,33,60,-41,69,49,-25,42,6,76,82,],[-5,-91,-95,35,-44,-32,-18,79,-2,-99,-60,94,],[-33,-71,-75,88,-98,-45,-52,-36,23,76,-75,17,],[94,-84,90,-81,-25,-98,4,19,-57,-19,9,-75,],[11,48,94,81,-12,60,-56,-40,29,-39,-37,84,],[69,-9,-93,2,-39,-1,68,-74,-24,89,-23,19,],[-18,33,-1,23,-41,7,32,-22,-78,-8,58,76,],[-8,39,72,-36,-51,73,63,63,-24,-42,67,-15,],[65,14,-51,-84,86,44,58,95,-47,-82,36,21,],[97,25,66,69,71,33,-6,72,-51,16,-16,-85,],[5,75,62,-70,-20,-64,-38,-82,24,-69,28,84,],[84,32,26,-26,-4,10,37,-32,5,-85,-57,28,],[47,74,-99,24,13,91,96,-52,-17,16,23,-78,],[13,-6,-24,99,-2,19,53,-36,-56,-42,35,40,],[93,-71,80,3,-46,61,65,96,71,-27,20,-21,],[64,-86,36,97,97,96,41,10,71,45,-30,-82,],[91,42,-24,-54,-63,76,19,49,-43,71,-27,-57,],[29,-38,26,-20,72,-57,50,68,23,-30,-65,-50,],[-24,34,-51,39,-93,-92,-1,-66,55,91,58,-54,],[-5,30,14,-86,-33,-10,72,80,90,90,-1,40,],[82,6,95,49,49,-96,-86,-78,83,-58,-29,50,],[-96,43,69,-16,29,-5,93,49,-23,53,54,9,],[-68,1,-43,62,-65,89,-79,45,-67,23,-52,11,],[-6,-2,36,-24,90,-50,9,43,59,83,68,26,],[9,0,-28,-36,9,-22,-19,-73,-76,20,63,96,],[-87,86,96,96,-49,-14,-78,-11,-68,40,69,27,],[31,-22,-82,43,16,66,44,2,-29,48,-26,20,],[77,-76,-49,-17,82,64,23,6,69,-23,-23,81,],[-77,-51,62,-79,78,-9,56,71,16,-49,72,14,],[-12,37,-82,46,-3,-24,13,35,17,-92,-7,-33,],[-44,67,6,27,-11,84,62,61,84,-6,14,91,],[96,93,60,-84,-37,48,15,6,15,29,39,-12,],[22,-56,47,-75,-88,47,88,90,-97,-44,91,20,],[-49,52,-71,95,50,88,74,-86,61,4,9,44,],[-73,17,-12,-1,-73,2,2,8,22,-50,27,35,],[9,-19,-30,-95,-29,58,57,-43,-4,-40,14,-57,],[65,2,-4,-88,-21,-9,-5,-4,-46,30,85,-83,],[67,-1,17,-71,76,69,65,37,-48,77,72,-45,],[66,30,-70,78,-95,-22,-35,-58,-4,71,-65,73,],[-59,48,80,-7,68,47,94,21,-54,-57,-64,12,],[9,-39,28,12,-42,94,-44,-34,-89,-20,-51,-7,],[74,-81,-67,-1,-49,5,-85,75,-65,77,50,-14,],[-75,65,13,-86,-2,-14,50,-73,-48,-48,-60,54,],[71,-22,85,79,45,-58,66,-79,-60,92,96,30,],[79,55,56,-42,-59,-35,84,91,21,24,42,31,],[-56,-63,37,-46,-56,-77,-34,-69,64,-66,-64,-67,],[-84,-77,-7,19,94,-25,60,-69,62,65,71,-13,],[-5,80,-47,-5,18,-34,8,-68,60,31,81,1,],[66,75,14,-26,-39,-31,-7,-81,41,9,91,-25,],[-6,99,-50,31,93,63,64,-9,71,-49,14,-4,],[-17,72,-36,87,78,6,89,33,56,-91,12,-31,],[1,-92,81,24,-61,4,-84,66,-59,-53,-64,55,],[-74,9,76,-43,-99,54,41,57,98,-27,3,-23,],[-73,99,58,-58,42,-75,-52,42,-80,26,10,42,],[73,2,84,-12,73,25,-20,-5,30,96,-66,-4,],[20,74,-64,-94,-76,-30,-46,41,-56,-58,-1,45,],[-46,-85,3,74,-91,-33,66,91,-51,51,7,87,],[72,97,25,22,19,15,98,1,-32,76,-60,3,],[-87,84,82,-59,21,72,30,-39,-60,-5,24,80,],[-8,13,32,4,3,-60,40,57,1,-68,-94,-56,],[44,-14,-22,-88,-98,34,86,-52,89,62,-36,74,],[-32,-32,48,72,37,80,37,-53,-21,-5,7,-83,],[-20,44,63,-11,88,-60,14,-7,17,-76,-34,-7,],[5,-96,20,10,74,-40,-24,24,21,74,20,-95,],[78,-25,-82,13,-77,-1,27,23,42,27,-27,61,],[55,84,84,36,-29,77,-27,-75,-19,-80,-72,-64,],[-85,9,-88,-25,-51,0,-18,-74,71,81,82,-66,],[-44,-5,5,-84,12,-44,-26,-43,83,-92,28,-63,],[-24,-1,-75,-9,22,7,-6,47,50,-91,31,38,],[72,-38,-24,-90,-39,15,1,-18,-42,97,35,-57,],[-16,89,62,47,59,-17,81,65,59,37,48,-40,],]; b=[-6192,-7339,-13374,-9114,11448,7499,6202,-8467,-1862,-9151,-11580,-7690,8684,-881,2703,-1216,10201,3985,11394,-3902,2803,-7327,-10907,9735,3143,-5574,-486,7077,5889,7378,6531,2207,-6431,-3613,16770,9553,7822,9565,-11916,5807,5555,13335,2766,7584,-11969,13837,-6524,12685,21710,-10289,2303,-4632,4307,9118,-7740,8954,7584,-4495,3598,17684,15248,12650,8333,8284,4490,5027,5710,16223,-8612,-10470,6055,364,615,22978,-14029,-4975,12847,11321,7675,3321,-11899,6258,-4822,-6114,16953,11327,9783,-364,-7472,25911,-16168,-9947,-13994,23220,-11449,8254,-5073,8602,8096,3006,]; c=[53,0,81,-88,-13,14,13,64,-74,-40,-99,89,]; x=[49.9756,48.7780,-74.2369,-27.2954,-67.5916,-2.7061,58.7826,26.5670,40.0556,29.5784,47.2052,72.9986,]; x1=numeric.LP(A,b,c); numeric.round(numeric.mul(100,numeric.sub(x,x1)));
t([0,0,0,0,0,0,0,0,0,0,0,0])
</pre>
 */
