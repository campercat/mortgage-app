CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  file_number VARCHAR(255) NOT NULL,
  property_address TEXT NOT NULL,
  purchase_price NUMERIC NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  down_percentage NUMERIC NOT NULL
);
