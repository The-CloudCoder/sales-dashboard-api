const Sale = require("../models/Sale");

/**
 * Fetch all sales for the authenticated user
 */
exports.getSales = async (req, res) => {
  const userId = req.user.uid; // Firebase user ID

  try {
    // Find sales where the userId matches the authenticated user
    const userSales = await Sale.find({ userId });
    res.status(200).json({ sales: userSales });
  } catch (error) {
    console.error("Error fetching sales:", error.message);
    res.status(500).json({ message: "Error fetching sales data" });
  }
};

/**
 * Add a new sale
 */
exports.createSale = async (req, res) => {
  const { product, quantity, price } = req.body;

  try {
    // Create a new sale
    const newSale = new Sale({
      product,
      quantity,
      price,
      userId: req.user.uid, // Associate the sale with the authenticated user
    });

    const savedSale = await newSale.save();
    res.status(201).json({ message: "Sale added successfully", sale: savedSale });
  } catch (error) {
    console.error("Error creating sale:", error.message);
    res.status(500).json({ message: "Error adding new sale" });
  }
};
