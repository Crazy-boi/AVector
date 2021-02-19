function AVector(x, y) {
    this.x = x;
    this.y = y;
}

AVector.prototype = {
    angle: function(inDegrees=false) {
        let a;
        a = Math.atan(this.y / this.x);
        if (this.x < 0)
            a += Math.PI;
        if (a < 0)
            a = 2*Math.PI + a;
        if (typeof inDegrees == "boolean" && inDegrees)
            return a/2/Math.PI*360;
        return a;
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    add: function(v, a="sub_y") {
        if (v instanceof AVector) {
            this.x += v.x;
            this.y += v.y;
        } else if (typeof v == "number") {
            if (typeof a == "number") {
                this.x += v;
                this.y += a;
            } else {
                this.x += v;
                this.y += v;
            }
        }
        return this;
    },
    sub: function(v, a="sub_y") {
        if (v instanceof AVector) {
            this.x -= v.x;
            this.y -= v.y;
        } else if (typeof v == "number") {
            if (typeof a == "number") {
                this.x -= v;
                this.y -= a;
            } else {
                this.x -= v;
                this.y -= v;
            }
        }
        return this;
    },
    mult: function(v, a="mult_y") {
        if (typeof v == "number") {
            if (typeof a == "number") {
                this.x *= v;
                this.y *= a;
            } else {
                this.x *= v;
                this.y *= v;
            }
        }
        return this;
    },
    div: function(v, a="div_y") {
        if (typeof v == "number") {
            if (typeof a == "number") {
                this.x /= v;
                this.y /= a;
            } else {
                this.x /= v;
                this.y /= v;
            }
        }
        return this;
    },

    normalize: function() {
        let a = this.length();
        this.x /= a;
        this.y /= a;
        return this;
    },
    limit: function(a) {
        if (typeof a == "number" && this.length() > a) {
            this.normalize();
            this.mult(a);
        }
        return this;
    },



    clone: function() {
        return new AVector(this.x, this.y);
    }
}

// Test
let v = new AVector(1, 1);

write(v);

//write(v.mult(5, 3));
//write(v.angle(true));
