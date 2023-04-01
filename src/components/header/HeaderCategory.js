import React from "react";
import { useState } from "react";
import { Icon } from "../../icons/Icon";
import CategoryList from "./headerIcons/categoryList/CategoryList";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
const HeaderCategory = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <>
      <div className="header-bottom-cart">
        <div className="header-bottom-category">
          <button onClick={toggleModal} className="category-btn-icon">
            <Icon name="category" />
            <span className="category-btn">Kateqoriyalar</span>
          </button>
          <div className="categoryList">
            <CategoryList />
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button className="modal-close-button" onClick={toggleModal}>
          <GrClose />
        </button>
        <div className="categories-list-full">
        <Link to="/mehsullar/Apple">
        <div className="categories-list-flex">
            <div className="categories-icon-desc">
              <Icon name="categoriesTel" />
            </div>
            <div className="categoriesTel-desc">
              <span className="categories_text">Telefon və planşetlər</span>
            </div>
          </div>
        </Link>
          
          <div className="categories-list-full">
            <div className="categories-list-flex">
              <div className="categories-icon-aks">
                <Icon name="categoriesAks" />
              </div>
              <div className="categoriesAks-desc">
                <span className="categories_text">Qadjet və aksesuarlar</span>
              </div>
            </div>
          </div>
          <div className="categories-list-full">
            <div className="categories-list-flex">
              <div className="categories-icon-tv">
                <Icon name="categoriesTv" />
              </div>
              <div className="categoriesTv-desc">
                <span className="categories_text">Tv, Audio və Əyləncə </span>
              </div>
            </div>
          </div>
          <div className="categories-list-full">
            <div className="categories-list-flex">
              <div className="categories-icon-tv">
                <Icon name="categoriesComp" />
              </div>
              <div className="categoriesTv-desc">
                <span className="categories_text">Komputer texnikasi </span>
              </div>
            </div>
          </div>
          <div className="categories-list-full">
            <div className="categories-list-flex">
              <div className="categories-icon-tv">
                <Icon name="categoriesTech" />
              </div>
              <div className="categoriesTv-desc">
                <span className="categories_text">Tv, Audio və Əyləncə </span>
              </div>
            </div>
          </div>
          <div className="categories-list-full">
            <div className="categories-list-flex">
              <div className="categories-icon-tv">
                <Icon name="categoriesNumb" />
              </div>
              <div className="categoriesTv-desc">
                <span className="categories_text">Tv, Audio və Əyləncə </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div> i am a modal</div>
        <h3>About BrandColors</h3>
        <p>her cesid rengleri burdan elde ede bilersiz</p>
        <p>lalalalalalallllllllllllllllllllllllllllllllllllllllllll</p> */}
      </Modal>
    </>
  );
};

export default HeaderCategory;
