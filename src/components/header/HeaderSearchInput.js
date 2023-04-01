// import { useRef } from "react";
// import { useEffect } from "react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../../redux/stores/features/moresale";
// import { searchProductName } from "../../redux/stores/features/searchInput";

const HeaderSearchInput = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { moreproducts, loading, error } = useSelector(
    (state) => state.moresale
  );
  const searchRef = useRef();
  const isTyping = search.replace(/\s+/, "").length > 0;

  useEffect(() => {
    if (isTyping) {
      dispatch(filterData(search));
    }
  }, [search]);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearch("");
    }
  };
  const getResultItem = (item) => {
    console.log(item);
  };
  // const handleChange = (search) => {
  //   if(search.trim() === null) return;
  //   dispatch(filterData(search))
  // }
  return (
    <div className="search">
      <input
        ref={searchRef}
        value={search}
        className={isTyping ? "typing" : null}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search datas..."
      />
      {moreproducts && isTyping && (
        <div className="search-result">
          {moreproducts.map((item) => (
            <div
              onClick={() => getResultItem(item)}
              key={item.id}
              className="search-result-item"
            >
              <img src={item.imageUrl} />
              <div>
                <div className="productName">{item.productName}</div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
          {moreproducts.length === 0 && (
            <div className="result-not-found">
              '{search}' ile axtardiginiz soz yox
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderSearchInput;

// // import { useRef } from "react";
// // import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { filterData } from "../../redux/stores/features/moresale";
// // import { searchProductName } from "../../redux/stores/features/searchInput";

// const HeaderSearchInput = () => {
//   const dispatch = useDispatch();
//   const handleChange = (search) => {
//     if(search.trim() === null) return;
//     dispatch(filterData(search))
//   }
//   return (
//     <input
//       onChange={(e) => handleChange(e.target.value)}
//       type="search"
//       placeholder="Search datas..."
//     />
//   );
// };

// export default HeaderSearchInput;

// import { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { filterData } from "../../redux/stores/features/moresale";
// import { searchProductName } from "../../redux/stores/features/searchInput";

// const HeaderSearchInput = () => {
//   const dispatch = useDispatch();
//   const { search } = useSelector((state) => state.search);
//   const { filteredDatas, loading, error } = useSelector(
//     (state) => state.moresale
//   );

//   // const isTyping = search.replace(/\s+/, "").length > 0;
//   const searchRef = useRef();
//   const handleChange = (search) => {
//     if (search.trim() === null) return;
//     dispatch(filterData(search));
//   };
//   // useEffect(
//   //   () => {
//   //     if (!isTyping){
//   //     dispatch(filterData(search));
//   //     }else{dispatch(filterData([]));

//   //     // const getData=setTimeout(()=>{
//   //     //  cart && setResult(cart)
//   //     // },1000)

//   //     // return ()=>{
//   //     //   clearTimeout(getData)
//   //     // }
//   //   },
//   //   [search]
//   // );
//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);
//   const handleClickOutside = (e) => {
//     if (searchRef.current && !searchRef.current.contains(e.target)) {
//       searchProductName("");
//     }
//   };
//   const getResultItem = (item) => {
//     console.log(item);
//   };
//   return (
//     <>
//       <div className="search" ref={searchRef}>
//         <input
//           value={search}
//           onChange={(e) => searchProductName(handleChange(e.target.value))}
//           type="search"
//           placeholder="Search datas..."
//         />
//         {filteredDatas &&  (
//           <div className="search-result">
//             {filteredDatas.map((item) => (
//               <div
//                 onClick={() => getResultItem(item)}
//                 key={item.id}
//                 className="search-result-item"
//               >
//                 <img src={item.imageUrl} />
//                 <div>
//                   <div className="productName">{item.productName}</div>
//                   <div className="price">{item.price}</div>
//                 </div>
//               </div>
//             ))}
//             {filteredDatas.length === 0 && (
//               <div className="result-not-found">
//                 '{search}' ile axtardiginiz soz yox
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default HeaderSearchInput;
