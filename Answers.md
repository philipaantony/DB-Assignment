1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
   Answer:

The category_id column in the Product table is a foreign key that establishes a link to the primary key id in the Product_Category table. Gives a one to many relationship.

2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
   Answer:

Enforce a foreign key constraint on the category_id column in the Product table, referencing the primary key in the Product_Category table. Ensure that each category_id value corresponds to a valid category.

Use FOREIGN KEY (category_id) REFERENCES Product_Category(id) for setting Foreign key in the Product Table
then without a valid foreign key the data will not saved to the product table.this makes a valid category assignment to the table
