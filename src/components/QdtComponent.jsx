import React from 'react';
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

export default class QdtComponent extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired,
  }
  componentDidMount() {
    const { type, props } = this.props;
    qdtComponents.render(type, props, this.node);
  }

  render() {
    return (
      <div ref={(node) => { this.node = node; }} />
    );
  }
}
