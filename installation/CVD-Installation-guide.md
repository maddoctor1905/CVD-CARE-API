# CVD Installation guide

## 1. NodeJs

the whole project is using NodeJs to work. 
You will need to go to [NodeJs](https://nodejs.org/en/download/) download page.
Then select *Windows Installer .msi 64-bit* and download it.

Folow installation steps.

## 2. Repositorys

You have to clone two repos: 
1. [CVD API](https://github.com/maddoctor1905/CVD-CARE-API)
2. [CVD APP](https://github.com/maddoctor1905/CVD-CARE-APP)

For next step, you need to go inside each repo you cloned.
Then run 
```bash=
npm i
```
If you successfully installed NodeJs. Everything should be working.

## 3. Mysql
You need to load the custom sql script.
First, connect to mysql terminal.
Next, run:
```bash=
CREATE DATABASE <YourDatabase>;
USE <YourDatabase>;
source /path/of/the/sql/script;
```
And the database will be ready

## 4. Modify API env
Open /path/to/api/.env
You should have this: 
```typescript=
PORT=3000

MYSQL_ADDRESS=localhost
MYSQL_PASSWORD=password
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_DATABASE=CVDTEST

```
Modify all variables to work with your mysql instance (MYSQL_*)

## 5. Run
In the api directory, run:
```bash=
npm run start:dev
```
In the app directory, run: 
```bash=
npm run start
```
## 6. Browser

Visit http://localhost:4200/

## 7. Otp

To have the otp working, you'll have to select a phoneNumber from db.
Open /YourDatabase/patient table in mysql db.
You can now see all phone number of patients.
Select one and enter it in the otp form.

You will now use the patient data.