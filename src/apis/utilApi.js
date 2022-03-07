import { defaultInstance } from "./index";

const getMoneyText = (money) => {
    return defaultInstance.get(`http://forum.vdevs.net/nossl/mtw.php?number=${money}`);
};

export const utilApi = {
    getMoneyText,
};