import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  //destructuring
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        // added custom style
        style={{
          //string destructuring
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
