import "./admin.scss"
import adminImg from "../../shared/images/admin.png"
import { getTitle } from "../../app/store/reducers/title/titleThunks";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const face = [
  {
    name: "Амангелди Майрамбек уулу",
    position: "Айыл өкмөт башчысы.",
    image: adminImg,
  },
  {
    name: "Амангелди Майрамбек уулу",
    position: "Айыл өкмөт башчысы.",
    image: adminImg,
  },
  {
    name: "Амангелди Майрамбек уулу",
    position: "Айыл өкмөт башчысы.",
    image: adminImg,
  },
];

export const Admins = () => {
  const title = useSelector(state => state.title.data || {});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTitle());
  }, [dispatch]);

  return (
    <div className="admin">

      <div className="container">
        <h1 className="admin_title">
          {title?.title_administration}
        </h1>
        <div className="admin_img">
          <img className="admin_img_st" src={adminImg} alt="" />
        </div>

        <div className="admin_grup">
          {face.map((admin, index) => (
            <div className="admin_block" key={index}>
              <img className="admin_block_img" src={admin.image} alt={admin.name} />
              <div className="admin_block_text">
                <h4 className="admin_block_text_position">{admin.position}</h4>
                <h2 className="admin_block_text_name">{admin.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
