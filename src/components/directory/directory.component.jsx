import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                  title: 'soft',
                  imageUrl: `${require('../../assets/akin-cakiner-UW-hO2OP2MY-unsplash.jpg')}`,
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'regal',
                  imageUrl: `${require('../../assets/amy-humphries-_igiFwG7Ybw-unsplash.jpg')}`,
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'bold',
                  imageUrl: `${require('../../assets/anne-nygard-t32KvOBUKDA-unsplash.jpg')}`,
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'sophisticated',
                  imageUrl: `${require('../../assets/jenelle-hayes-K2SXdKPEhcg-unsplash.jpg')}`,
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'shabby chic',
                  imageUrl: `${require('../../assets/sandie-clarke-Xn5uchPtzP4-unsplash.jpg')}`,
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]              
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;