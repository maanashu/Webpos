import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const ProductRightSidebar = () => {
    return (
        <>
            <div className='sidebarRight'>
                <ListGroup>
                    <ListGroupItem className="rightSidebarItems active" >
                        <Image src={Images.ShoppingOutline} alt="image" className="img-fluid rightSidebarIcons shoppingCount" />
                    </ListGroupItem>
                    <ListGroupItem className="rightSidebarItems" >
                        <Image src={Images.AddProduct} alt="image" className="img-fluid rightSidebarIcons" />
                    </ListGroupItem>
                    <ListGroupItem className="rightSidebarItems" >
                        <Image src={Images.Cancelproduct} alt="image" className="img-fluid rightSidebarIcons" />
                    </ListGroupItem>
                    <ListGroupItem className='rightSidebarItems'>
                        <Image src={Images.PauseCircleOutline} alt="image" className="img-fluid rightSidebarIcons" />
                    </ListGroupItem>
                    <ListGroupItem className='rightSidebarItems'>
                        <Image src={Images.RightArrow} alt="image" className="img-fluid rightSidebarIcons" />
                    </ListGroupItem>
                </ListGroup>
            </div>
        </>
    )
}

export default ProductRightSidebar