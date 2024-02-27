// 1. Display female passengers who survived and are older than 30.

SELECT * FROM tested
WHERE survived = 1, sex = 'female', age > 30

// 2. Find the average age of men who didn't survive.

SELECT AVG(age) FROM tested
WHERE survived = 0 AND sex ='male'

Result = 30.27273170731707

// 3. Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C'."

SELECT * FROM tested
WHERE  fare > 20 AND fare < 50 AND embarked = 'C'

// 4. Find the total number of the survivors in the first class.

SELECT * FROM tested
WHERE  survived = 1 AND Pclass = 1

// 5. Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets.".

SELECT * FROM tested
WHERE embarked = 'C' AND fare > 75