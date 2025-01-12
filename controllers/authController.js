exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await admin.auth().getUserByEmail(email);
      // Implement your authentication logic here
      res.status(200).json({ message: "User authenticated", user });
    } catch (error) {
      res.status(400).json({ message: "Authentication failed", error });
    }
  };
  