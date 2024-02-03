const CheckToken = () => {
    const token = localStorage.getItem("token")
    if ( token === null  ) {
        return false;
    }
    else {
        return true;
    }
};

export default CheckToken;