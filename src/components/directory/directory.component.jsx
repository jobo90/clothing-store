import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import shoes from '../../images/shoes.jpg';
import suits from '../../images/suits.jpg';
import hats from '../../images/hats.jpg';
import women from '../../images/women.jpg';
import men from '../../images/men.jpg';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: hats,
          id: 1,
          linkUrl: 'hats',
        },
        {
          title: 'suits',
          imageUrl: suits,
          id: 2,
          linkUrl: '',
        },
        {
          title: 'shoes',
          imageUrl: shoes,
          id: 3,
          linkUrl: '',
        },
        {
          title: 'women',
          imageUrl: women,
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'men',
          imageUrl: men,
          size: 'large',
          id: 5,
          linkUrl: '',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
