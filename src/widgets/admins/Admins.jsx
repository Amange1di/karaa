import "./admin.scss"
import admin from "../../shared/images/admin.png"
import img from "../../shared/images/hero.jpg"
const face = [
  {
    name: "Амангелди Майрамбек уулу",
    position: "Айыл өкмөт башчысы.",
    image: img,
  },
  {
    name: "Амангелди Майрамбек уулу",
    position: "Айыл өкмөт башчысы.",
    image: img,
  },
  {
    name: "Амангелди Майрамбек уулу",
    position: "Айыл өкмөт башчысы.",
    image: img,
  },
];

export const Admins = () => {
  return (
    <div className="admin">

      <div className="container">
        <h1 className="admin_title">
          АЙЫЛ ӨКМӨТҮН АППАРАТЫНЫН СТРУКТУРАСЫ
        </h1>
        <div className="admin_img">

        <img className="admin_img_st" src={admin} alt="" />
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
