exports.findAllMenus = () => {
  return `
        SELECT * 
        FROM TBL_MENU
    `;
};

exports.findMenuByMenuCode = () => {
  return `
        SELECT * 
        FROM TBL_MENU
        WHERE MENU_CODE = ?
    `;
};

exports.registNewMenu = () => {
  return `
        INSERT INTO TBL_MENU(MENU_NAME,MENU_PRICE,CATEGORY_CODE,ORDERABLE_STATUS)
        VALUES(?,?,?,?)
    `;
};
