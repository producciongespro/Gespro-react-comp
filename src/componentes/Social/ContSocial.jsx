import Social from "./Social";

const configSocial = {
  fill: "#ff5733",
  size: "medium",
};

const item = {
  id: "123",
  likes: 125,
  dislikes: 32,
  views: 4587,
};

const putLikesDislikes = (data) => {
  console.log("data", data);
};

export default function ContSocial() {
  return (
    <div className="row">
      <div className="col-3">
        <Social
          putLikesDislikes={putLikesDislikes}
          item={item}
          config={configSocial}
        />
      </div>
    </div>
  );
}
