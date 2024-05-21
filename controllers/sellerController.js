import propertyModel from "../models/propertyModel.js";

//add property
const addProperty = async (req, res) => {
  const {
    userId,
    state,
    district,
    pincode,
    address,
    bedrooms,
    bathrooms,
    hospitals,
    colleges,
    schools,
  } = req.body;
  const newProperty = new propertyModel({
    userId,
    state,
    district,
    pincode,
    address,
    bedrooms,
    bathrooms,
    hospitals,
    colleges,
    schools,
  });
  try {
    await newProperty.save();
    res.json({ success: true, message: "Property Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//get property list
const getPropertyList = async (req, res) => {
  const { userId } = req.body;
  try {
    const properties = await propertyModel.find({ userId: userId });
    res.json({ success: true, properties });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error fetching your properties list",
    });
  }
};

// delete property
const deleteProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await propertyModel.findByIdAndDelete(id);
    if (property) {
      res.json({ success: true, message: "Properry Deleted" });
    } else {
      res.json({ success: false, message: "Properry not found" });
    }
  } catch (error) {
    res.json({ success: false, error });
  }
};

export { addProperty, getPropertyList, deleteProperty };
