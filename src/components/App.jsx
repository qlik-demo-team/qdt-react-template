import React from 'react';
import QdtComponent from './QdtComponent';

const viz = {
  type: 'QdtViz',
  props: {
    type: 'barchart', id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', width: '300px', height: '300px',
  },
};

const App = () => (
  <div>
    <QdtComponent type={viz.type} props={viz.props} />
  </div>
);

export default App;
