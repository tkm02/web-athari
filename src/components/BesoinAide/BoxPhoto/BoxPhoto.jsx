import "./style.css";

const BoxPhoto = ({ img }) => {
  return (
    <div className="box-left">
      <img src={img} />
    </div>
  );
};

export default BoxPhoto;
