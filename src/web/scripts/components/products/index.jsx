// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import MetaContainer from '../../shared/meta.jsx';

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        // TODO: allow the user to sort
        const sortedProductList = this.props.products.list.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

        return (
            <section id="products" >
                <MetaContainer title={'Products'} />
                {
                    sortedProductList.map(
                        (product) => (
                            <div key={'product-' + product.name}>
                                <h1>{product.name}</h1>
                            </div>
                        )
                    )
                }

            </section>
        );
    }
};

Products.propTypes = {
    products: PropTypes.object,
    addProduct: PropTypes.func
};

export default Products;