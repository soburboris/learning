function auth (login: number | string, password: number | string) {
	if ( login == 1212 && password == 'efeferfe') {
		return "We are logged!!!"
	} else {
		return "Login or password is incorrect!!!"
	}
}