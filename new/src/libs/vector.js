function Vector(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

Vector.prototype = {
	negative: function () {
		return new Vector(-this.x, -this.y);
	},
	add: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x + v.x, this.y + v.y);
		else
			return new Vector(this.x + v, this.y + v);
	},
	subtract: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x - v.x, this.y - v.y);
		else
			return new Vector(this.x - v, this.y - v);
	},
	multiply: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x * v.x, this.y * v.y);
		else
			return new Vector(this.x * v, this.y * v);
	},
	divide: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x / v.x, this.y / v.y);
		else
			return new Vector(this.x / v, this.y / v);
	},
	equals: function (v) {
		return this.x == v.x && this.y == v.y;
	},
	dot: function (v) {
		return this.x * v.x + this.y * v.y;
	},
	length: function () {
		return Math.sqrt(this.dot(this));
	},
	unit: function () {
		return this.divide(this.length());
	},
	min: function () {
		return Math.min(this.x, this.y);
	},
	max: function () {
		return Math.max(this.x, this.y);
	},
	angleTo: function (a) {
		return Math.acos(this.dot(a) / (this.length() * a.length()));
	},
	toArray: function (n) {
		return [this.x, this.y].slice(0, n || 2);
	},
	clone: function () {
		return new Vector(this.x, this.y);
	},
	init: function (x, y, z) {
		this.x = x;
		this.y = y;
		return this;
	}
};

Vector.negative = function (a, b) {
	b.x = -a.x;
	b.y = -a.y;
	return b;
};
Vector.add = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x + b.x;
		c.y = a.y + b.y;
	}
	else {
		c.x = a.x + b;
		c.y = a.y + b;
	}
	return c;
};
Vector.subtract = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x - b.x;
		c.y = a.y - b.y;
	}
	else {
		c.x = a.x - b;
		c.y = a.y - b;
	}
	return c;
};
Vector.multiply = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x * b.x;
		c.y = a.y * b.y;
	}
	else {
		c.x = a.x * b;
		c.y = a.y * b;
	}
	return c;
};
Vector.divide = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x / b.x;
		c.y = a.y / b.y;
	}
	else {
		c.x = a.x / b;
		c.y = a.y / b;
	}
	return c;
};

Vector.unit = function (a, b) {
	var length = a.length();
	b.x = a.x / length;
	b.y = a.y / length;
	return b;
};

Vector.min = function (a, b) {
	return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y));
};
Vector.max = function (a, b) {
	return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y));
};
Vector.lerp = function (a, b, fraction) {
	return b.subtract(a).multiply(fraction).add(a);
};
Vector.fromArray = function (a) {
	return new Vector(a[0], a[1]);
};

export default Vector;