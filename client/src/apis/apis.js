import axios from "axios";

const getCoffeeList = async (error, setData, setAllData) => {
    try {
        const result = await axios.get('http://localhost:3004/coffee');
        if (result.data.success) {
            setData(result.data.data);
            setAllData(result.data.data);
        } else {
            return error(result.data.error)
        }
    } catch (e) {
        return error("Server Error");
    }
}

export { getCoffeeList };
