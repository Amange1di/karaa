import "./admin.scss"
import adminImg from "../../shared/images/admin.png"
import { getTitle } from "../../app/store/reducers/title/titleThunks";
import { getAdmin } from "../../app/store/reducers/admin/adminThunks";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";



export const Admins = () => {
  const title = useSelector(state => state.title.data || {});
  const admins = useSelector(state => state.admin.admin || []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTitle());
    dispatch(getAdmin());
  }, [dispatch]);

  return (
    <div className="admin">

      <div className="container">
        <h1 className="admin_title">
          {title?.title_administration}
        </h1>
        <div className="admin_img">
          <img className="admin_img_st" src={title.img_path} alt="" />
        </div>

        <div className="admin_grup">
          {Array.isArray(admins) && admins.map((admin, index) => (
            <div className="admin_block" key={index}>
              <img className="admin_block_img" src={admin.img} alt={admin.name} />
              <div className="admin_block_text">
                <h4 className="admin_block_text_position">{admin.role}</h4>
                <h2 className="admin_block_text_name">{admin.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
