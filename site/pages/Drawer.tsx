import React, { useState } from 'react';
import { Button, Drawer } from 'components';

export default () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [topVisible, setTopVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          setLeftVisible(!leftVisible);
        }}
      >
        left
      </Button>
      <Drawer
        visible={leftVisible}
        onClose={() => {
          setLeftVisible(false);
        }}
      >sider</Drawer>

      <Button
        color="primary"
        onClick={() => {
          setRightVisible(!rightVisible);
        }}
      >
        right
      </Button>
      <Drawer
        placement="right"
        visible={rightVisible}
        onClose={() => {
          setRightVisible(false);
        }}
      />

      <Button
        color="primary"
        onClick={() => {
          setTopVisible(!topVisible);
        }}
      >
        top
      </Button>
      <Drawer
        placement="top"
        visible={topVisible}
        onClose={() => {
          setTopVisible(false);
        }}
      />

      <Button
        color="primary"
        onClick={() => {
          setBottomVisible(!bottomVisible);
        }}
      >
        bottom
      </Button>
      <Drawer
        placement="bottom"
        visible={bottomVisible}
        onClose={() => {
          setBottomVisible(false);
        }}
      />
    </div>
  );
};
