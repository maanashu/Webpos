import React, { useState } from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import CustomModal from '../../customModal/CustomModal';
import AddProduct from './addProduct';


const ProductRightSidebar = () => {
    const [key, setKey] = useState(Math.random());
    const [modalDetail, setModalDetail] = useState({
        show: false,
        title: "",
        flag: "",
    });
    const handleOnCloseModal = () => {
        setModalDetail({
            show: false,
            title: "",
            flag: "",
        });
        setKey(Math.random());
    };
    return (
        <>
            <div className='sidebarRight'>
                <ListGroup>
                    <ListGroupItem className="rightSidebarItems active" >
                        <Image src={Images.ShoppingOutline} alt="image" className="img-fluid rightSidebarIcons shoppingCount" />
                    </ListGroupItem>
                    <ListGroupItem className="rightSidebarItems" onClick={() => {
                        setModalDetail({ show: true, flag: "AddProduct" });
                        setKey(Math.random());
                    }}>
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
            <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={false}
                mediumWidth={false}
                ids={modalDetail.flag === "AddProduct" ? "AddProduct" : "AddProduct"}

                child={
                    modalDetail.flag === "AddProduct" ? (
                        <AddProduct close={() => handleOnCloseModal()} />
                    ) :
                        ""
                }
                header={
                    <>
                        <h2 className="modalHeading mb-0">
                            <figure className='text-center'>
                                <Image src={Images.plusCircleOutline} alt="img" onClick={() => handleOnCloseModal()} />
                            </figure>
                            <p className='addProductHeading'>Add New Product<br></br> Manually</p>
                        </h2>
                        <button className="closeButton d-none">
                            <Image src={Images.crossIcon} alt="img" onClick={() => handleOnCloseModal()} />
                        </button>
                    </>
                }

                onCloseModal={() => handleOnCloseModal()}
                footer={
                    <>
                        <div className='modal-footer'>
                            <button className='cancelBtn'>Cancel</button>
                            <button className='ModalBlue'>Add to the cart
                                <Image src={Images.plusCircleOutline} alt="image" className="img-fluid BtnIcon" />
                            </button>
                        </div>
                    </>
                }
            />
        </>
    )
}

export default ProductRightSidebar