export const USER_SIGNIN = "USER_SIGNIN";
export const USER_SIGNOUT = "USER_SIGNOUT";

export default {
    state:{
        userInfo: JSON.parse(localStorage.getItem('user')) || {}
    },
    method: {
        [USER_SIGNIN](state, user) {
            localStorage.setItem('user', JSON.stringify(user));
            var temp = Object.assign({},state.UserInfo, user);
            state.UserInfo = temp;
        },
        [USER_SIGNOUT](state) {
            localStorage.removeItem('user');
            state.UserInfo = {};
        }
    }
}