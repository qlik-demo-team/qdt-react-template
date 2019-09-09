import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import QdtComponents from 'qdt-components';

const options = {
  config: {
    host: 'sense-demo.qlik.com',
    secure: true,
    port: 443,
    prefix: '/',
    appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde',
  },
  connections: {
    vizApi: true,
    engineApi: true,
  },
};

const qdtComponents = new QdtComponents(options.config, options.connections);

function QdtComponent(props) {
  const node = useRef(null);
  const { type, props: qProps } = props;

  useEffect(() => {
    qdtComponents.render(type, qProps, node.current);
  });

  return (
    <div ref={node} />
  );
}

QdtComponent.propTypes = {
  type: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
};

export default QdtComponent;
