import { observable, action } from 'mobx';
import { getUserLogin } from '../../service/index';

interface LoginInfo {
	user_name: string;
	user_pwd: string;
}

class User {
	@observable isLogin: boolean = false;

	@action async login(form: LoginInfo): Promise<any> {
		const result: any = await getUserLogin(form);
        return result
	}
}

export default User;
