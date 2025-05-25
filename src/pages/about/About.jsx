import React, { useEffect, useState } from 'react';
import { AboutContend, AboutSaitBar } from '../../widgets';
import { useSelector, useDispatch } from 'react-redux';
import { getAbout } from '../../app/store/reducers/about/aboutThunks';

export const About = () => {
  const dispatch = useDispatch();
  const about = useSelector(state => state.about.about || []);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch]);

  useEffect(() => {
    if (about.length > 0) {
      setSelectedItem(about[0]);
    }
  }, [about]);

  if (!selectedItem) return null;

  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "start",
      }}
    >
      <AboutSaitBar items={about} onSelect={setSelectedItem} />
      <AboutContend
        title={selectedItem.title}
        content={selectedItem.content.main}
        all={selectedItem.content.all}
        all_people={selectedItem.content.all_people}
        location={selectedItem.location}
        pipls={about.find((item) => item.title === selectedItem.title)?.people || []}
      />
    </div>
  );
};
