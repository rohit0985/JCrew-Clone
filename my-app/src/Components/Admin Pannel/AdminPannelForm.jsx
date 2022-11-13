import React from "react";
import "./adminpannelform.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getData, postData } from "../../Redux/AppReducer/action";

const AdminPannelForm = () => {
  const dispatch = useDispatch();

  const [productAdd, setProductAdd] = useState({
    name: "",
    price: "",
    brand: "",
    category: "",
    belongsTo: "",
    productDetails: {
      desc: "",
      highlightPoints: [],
    },
    colors: [
      {
        colorName: "",
        images: [""],
        availableSize: [],
      },
    ],
  });

  const handlePost = (event) => {
    const { name, value } = event.target;
    setTimeout(() => {
      if (name === "highlightPoints") {
        let x = productAdd.productDetails.highlightPoints;
        x.push(value);
        setProductAdd({ ...productAdd, [name]: x });
      }
    }, 2000);
    setProductAdd({ ...productAdd, [name]: value });
  };

  const handleAdd = () => {
    console.log(productAdd);
  };

  return (
    <div className="adminpannel-form">
      <div className="address-form">
        <h1>PRODUCTS ADMIN PANNEL</h1>
        <div className="inputboxes">
          <div className="inputflex">
            <div className="inputwrap">
              <input type="text" required onChange={handlePost} name="name" />
              <label>*Name</label>
            </div>
            <div className="inputwrap">
              <input
                type="number"
                required
                onChange={handlePost}
                name="price"
              />
              <label>*Price</label>
            </div>
            <div className="inputwrap">
              <input type="text" required onChange={handlePost} name="brand" />
              <label>*Brand</label>
            </div>
          </div>
          <div className="inputflex">
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name="category"
              />
              <label>*Category</label>
            </div>
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name="belongsTo"
              />
              <label>*BelongTo</label>
            </div>
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name="colorName"
              />
              <label>*Color</label>
            </div>
          </div>
          <div className="inputwrap">
            <input type="text" required onChange={handlePost} name="desc" />
            <label>*Product Details</label>
          </div>
          {/* HIGHLIGHT POINTS */}
          <div className="inputflex">
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name="highlightPoints"
              />
              <label>*HighlightPoints1</label>
            </div>
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name="highlightPoints"
              />
              <label>*HighlightPoints2</label>
            </div>
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name="highlightPoints"
              />
              <label>*HighlightPoints3</label>
            </div>
          </div>
          <div className="inputflex">
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name="highlightPoints"
              />
              <label>*HighlightPoints4</label>
            </div>
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name="highlightPoints"
              />
              <label>*HighlightPoints5</label>
            </div>
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name="highlightPoints"
              />
              <label>*HighlightPoints6</label>
            </div>
          </div>
          {/* HIGHLIGHT POINTS END */}
          <div className="inputflex">
            <div className="inputwrap">
              <input type="text" required onChange={handlePost} name="images" />
              <label>*Image1</label>
            </div>
            <div className="inputwrap">
              <input type="text" required onChange={handlePost} name="images" />
              <label>*Image2</label>
            </div>
          </div>
          <div className="inputflex">
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name={"availableSize"}
              />
              <label>*AvailableSize1</label>
            </div>
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name={"availableSize"}
              />
              <label>*AvailableSize1</label>
            </div>
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name={"availableSize"}
              />
              <label>*AvailableSize1</label>
            </div>
          </div>
          <div className="inputflex">
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name={"availableSize"}
              />
              <label>*AvailableSize1</label>
            </div>
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name={"availableSize"}
              />
              <label>*AvailableSize1</label>
            </div>
            <div className="inputwrap">
              <input
                type="text"
                required
                onChange={handlePost}
                name={"availableSize"}
              />
              <label>*AvailableSize1</label>
            </div>
          </div>
        </div>
        <button className="paymentbtn" onClick={handleAdd}>
          ADD PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default AdminPannelForm;
