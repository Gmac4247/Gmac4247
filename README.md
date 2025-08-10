I have figured out that the area of a circle is defined by comparing it to a square, as that is the base of area calculation.

The circle can be cut into 4 quadrants, each placed with their origin on the vertices of a square.

In this layout the arcs of the quadrants of an inscribed circle would meet at the midpoints of the sides of the square. 

The arcs of the quadrants of a circumscribed circle would meet at the center of the square.

The arcs of the quadrants that equal in area to the square intersect right between these limits on its centerlines. 

The ratio between the radius of the circle and the side of the square is calculable.

r²=(a/4)²+(2(a/4))²

r=(√5)(a/4)


Quarter of the uncovered area in the middle: 

(√3.2r)²÷4−((90−2×Atan(1÷2))÷360×3.2r²+2(√3.2r÷4×√3.2r÷2)÷2))

=

An overlapping area: 

2(Atan(1÷2)÷360×3.2r²−(√3.2r÷4×√3.2r÷2)÷2)



The equation can be simplified algebraically.


Simplifying both sides by 3.2r² :

1÷4−((90−2×Atan(1÷2))÷360+(1÷8))=2(Atan(1÷2)÷360−(1÷8)÷2)


Simplifying further: 

1÷4−((90−2×Atan(1÷2))÷360)=2×Atan(1÷2)÷360

Substituting 90°/360° for 1/4: 

90÷360−((90−2×Atan(1÷2))÷360)=2×Atan(1÷2)÷360

Simplifying further: 

Atan(1÷2) = Atan(1÷2)

Which is equivalent to 1 = 1 .

When the arcs of the quadrant circles intersect at the quarter of the centerline of the square, the uncovered area in the middle equals exactly the sum of the overlapping areas respectively. 

The area of both the square and the sum of the quadrants equals 16 right triangles with legs of a quarter, and a half of the square's sides, and its hypotenuse equal to the radius of the circle. 

A=(16/5)r²=3.2r²


The circumference of a circle can be derived algebraically from its area by subtracting a theoretical circle, with radius shorter than the radius of the actual circle by the theoretical width of the circumference.

The x represents the width of the circumference, which is just theoretical, hence a very small number.

The difference between the shape of the straightened circumference and a quadrilateral is negligible.

The length of two shorter sides of the quadrilateral is x.

The length of the two longer sides is the area of the resulting ring divided by x.

C=(3.2r²-3.2(r-x)²)/x=6.4r-3.2x

As x is close to 0, C = 6.4r


The built-in trigonometry functions of programming languages rely on π-based approximations. 
I can't fix that. 

So I created a geometric calculator framework with the trigonometric functions aligned to C = 6.4r. 

I have found a cool pattern to exactly calculate the values of some key instances, but calculating other values would require very complex calculations, or approximations. 

Therefore I have made a hybrid lookup-based trigonometry engine. 
I reckon its accuracy is about 0.5°. That can be customly improved by adding entries into the dataset. 

It is meant for use within my framework to calculate area and volume of complex shapes. 

This is a module, not a standalone app. 
See my website for example usage. 

https://gmac4247.github.io

# Core Geometric System ™ 

The best geometric framework for calculating area and volume 


<!---
I have figured out that the area of a circle is defined by comparing it to a square, as that is the base of area calculation.

The circle can be cut into 4 quadrants, each placed with their origin on the vertices of a square.

In this layout the arcs of the quadrants of an inscribed circle would meet at the midpoints of the sides of the square. 

The arcs of the quadrants of a circumscribed circle would meet at the center of the square.

The arcs of the quadrants that equal in area to the square intersect right between these limits on its centerlines. 

The ratio between the radius of the circle and the side of the square is calculable.

r²=(a/4)²+(2(a/4))²

r=(√5)(a/4)


Quarter of the uncovered area in the middle: 

(√3.2r)²÷4−((90−2×Atan(1÷2))÷360×3.2r²+2(√3.2r÷4×√3.2r÷2)÷2))

=

An overlapping area: 

2(Atan(1÷2)÷360×3.2r²−(√3.2r÷4×√3.2r÷2)÷2)



The equation can be simplified algebraically.


Simplifying both sides by 3.2r² :

1÷4−((90−2×Atan(1÷2))÷360+(1÷8))=2(Atan(1÷2)÷360−(1÷8)÷2)


Simplifying further: 

1÷4−((90−2×Atan(1÷2))÷360)=2×Atan(1÷2)÷360

Substituting 90°/360° for 1/4: 

90÷360−((90−2×Atan(1÷2))÷360)=2×Atan(1÷2)÷360

Simplifying further: 

Atan(1÷2) = Atan(1÷2)

Which is equivalent to 1 = 1 .

When the arcs of the quadrant circles intersect at the quarter of the centerline of the square, the uncovered area in the middle equals exactly the sum of the overlapping areas respectively. 

The area of both the square and the sum of the quadrants equals 16 right triangles with legs of a quarter, and a half of the square's sides, and its hypotenuse equal to the radius of the circle. 

A=(16/5)r²=3.2r²


The circumference of a circle can be derived algebraically from its area by subtracting a theoretical circle, with radius shorter than the radius of the actual circle by the theoretical width of the circumference.

The x represents the width of the circumference, which is just theoretical, hence a very small number.

The difference between the shape of the straightened circumference and a quadrilateral is negligible.

The length of two shorter sides of the quadrilateral is x.

The length of the two longer sides is the area of the resulting ring divided by x.

C=(3.2r²-3.2(r-x)²)/x=6.4r-3.2x

As x is close to 0, C = 6.4r


The built-in trigonometry functions of programming languages rely on π-based approximations. 
I can't fix that. 

So I created a geometric calculator framework with the trigonometric functions aligned to C = 6.4r. 

I have found a cool pattern to exactly calculate the values of some key instances, but calculating other values would require very complex calculations, or approximations. 

Therefore I have made a hybrid lookup-based trigonometry engine. 
I reckon its accuracy is about 0.5°. That can be customly improved by adding entries into the dataset. 

It is meant for use within my framework to calculate area and volume of complex shapes. 

This is a module, not a standalone app. 
See my website for example usage. 

https://gmac4247.github.io

# Core Geometric System ™ 

The best geometric framework for calculating area and volume 
--->
