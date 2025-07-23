# 📦 GUDANGKU

> **GudangKu Desktop** is a comprehensive inventory management application integrated with **GudangKu Mobile**, and **GudangKu Web**. While other GudangKu apps allows users to **manage and list inventory**, gain insights through **inventory analysis charts** and summaries, group items into **reports**, and setting **reminders**. This Desktop apps is only for **CMS (Content Management System)**, so it will manage almost all user's data like **user's info**, **inventory**, **reports**, **history**, and **apps summaries**. 

## 📋 Basic Information

If you want to see the project detail documentation, you can read my software documentation document. 

1. **Pitch Deck**
https://docs.google.com/presentation/d/1a0ONZzNSUXJZOvnDljwQQ3OqhJxsB8uAf82kwPc-JnQ/edit?usp=drive_link 

2. **Diagrams**
https://drive.google.com/drive/folders/1KyuiC89axkeIvLK429qSZcZzD2sYsN81?usp=drive_link 

3. **Software Requirement Specification**
https://docs.google.com/document/d/1LJs4-4irRE99EY2wWim1Uit4GJ9YUYpucTSZ68kLOTI/edit?usp=sharing  

4. **User Manual**
https://docs.google.com/presentation/d/1HUgl352SZEXpHBoPCJc3Qga7paCxtDEY7zL34zGK6f8/edit?usp=drive_link 

5. **Test Cases**
https://docs.google.com/spreadsheets/d/18sJ30LpBuwAWojDD1GS3zzhCvOJjA4algefdBll3Kwo/edit?usp=drive_link 

### 🌐 Deployment URL

- Download Link : ...

### 📱 Demo video on the actual device

[URL]

---

## 🎯 Product Overview
- **Inventory Management**
Admin can manage all user’s inventory items in their household or warehouse. Admin can edit and delete item details such as name, category, price, brand, placement, and availability status.

- **Inventory Report**
Admin can view and manage the user's report of inventory. Reports can also be exported as PDFs or further analyzed.

- **Exported Dataset**
Admin can export all data in Excel or PDF format for personal use and management.

- **Reminder**
Admin can view and manage all reminders that are set by the user, and monitor how much time it is broadcasting to the user.

## 🚀 Target Users

1. **Admin of GudangKu**
Individuals who assigned to manage and monitoring all GudangKu data accross all platform.

## 🧠 Problem to Solve

1. Admins lack a **central dashboard** to monitor and manage all inventory items across different users and locations, leading to **inefficient oversight**.  
2. It’s difficult to **edit or validate item data** submitted by users without a consistent, structured system, increasing the chance of **inaccurate records**.  
3. Admins need to manually handle **report generation and exports**, which is **time-consuming** and lacks standardization.  
4. Tracking and managing **user reminders** for item maintenance or usage becomes chaotic without a unified view, risking **missed alerts** or **duplicate notifications**.  
5. Admins have no way to **analyze inventory trends** or **aggregate data insights** across users, limiting their ability to make **informed decisions** or give strategic support.

---

## 💡 Solution

1. Provide a **centralized admin panel** where admins can access and manage **all users' inventory** across households or warehouses efficiently.  
2. Enable admins to **edit, update, or delete** item attributes such as name, category, price, brand, placement, and availability to ensure **data accuracy and consistency**.  
3. Allow **automated export** of inventory data and reports in **PDF or Excel format**, reducing manual work and standardizing documentation.  
4. Integrate a **reminder management system** where admins can view, adjust, or monitor all scheduled user reminders and analyze their **broadcast timing**.  
5. Equip admins with **analytics dashboards** that show inventory distribution, item usage, and trends, allowing them to **monitor behavior and plan improvements**.


## 🔗 Features

- 🧑‍💻 All Data Management
- 📄 Data Export
- 📊 Analytics & Summaries

---

## 🛠️ Tech Stack

### Desktop (Front End)

- Electron JS

### Back End (Rest API)

- PHP Laravel

### Others Data Storage

- Local & Session Storage

### Infrastructure & Deployment

- Github (Code Repository)

### Other Tools & APIs

- Postman

---

## 🏗️ Architecture
### Structure

### 📁 Project Structure

| Directory/File                | Purpose                                                                                   |
|------------------------------|-------------------------------------------------------------------------------------------|
| `pages/`                     | Page-level components (HTML).                            |
| `src/app/repositories/`      | Data access logic, e.g., API or local data fetching.                                      |
| `src/app/services/`          | Service layer for interacting with APIs or external logic.                               |
| `src/app/usecases/`          | Business logic layer handling application workflows.                                     |                                |
| `src/app/components/common/` | Shared and reusable components (buttons, modals, etc).                                   |                                        |
| `src/app/const/`             | Constant values, enums, or static configuration.                                          |
| `src/app/style/`             | Global styling (e.g., CSS/SCSS files).                                                   |
| `main.js`                    | Main entry point for the application.                     |
| `preload.js`                 | Preload script for context bridging between frontend and backend.     |
| `package.json`               | Project configuration and dependency list.                                               |                         |
| `.gitignore`                 | Git rules to ignore certain files/folders.                                               |
| `README.md`                  | Project documentation (this file).                                                       |

---

### 🧾 Environment Variables

To set up the environment variables, just create the `.env` file in the root level directory.

| Variable Name                        | Description                                                              |
|----------------------------------|--------------------------------------------------------------------------|
| `...`                  | ...                      |

---

## 🗓️ Development Process

### Technical Challenges

- Not all **utils (helpers)** can be tested in **automation testing**
- Feature that return the **output in Exported File** must be **tested manually** 

---

## 🚀 Setup & Installation

### Prerequisites

#### 🔧 General
- Git installed
- A GitHub account
- Basic knowledge of Javascript and Software Testing
- Code Editor
- Postman

#### 🎨 Desktop (Front End)
- Javascript
- NodeJS
- Git for cloning the repository.
- Deployed Backend Apps's Endpoint Access

### Installation Steps

**Local Init & Run**
1. Download this Codebase as ZIP or Clone to your Git
2. Set Up Environment Variables `.env` at the root level directory. You can see all the variable name to prepare at the **Project Structure** before or `.env.example`
3. Install Dependencies using `npm install` and `npm update`
3. **Run the Electron** using `npm start`

**Deployment**
1. ...

---

## 👥 Team Information

| Role     | Name                    | GitHub                                     | Responsibility |
| -------- | ----------------------- | ------------------------------------------ | -------------- |
| Backend Developer  | Leonardho R. Sitanggang | [@FlazeFy](https://github.com/FlazeFy)     | Manage Backend and Telegram Bot Codebase         |
| Frontend Developer  | Leonardho R. Sitanggang | [@FlazeFy](https://github.com/FlazeFy)     | Manage Frontend Codebase         |       |
| System Analyst  | Leonardho R. Sitanggang | [@FlazeFy](https://github.com/FlazeFy)     | Manage Diagram & Software Docs         |
| Quality Assurance  | Leonardho R. Sitanggang | [@FlazeFy](https://github.com/FlazeFy)     | Manage Testing & Documented The API         |

---

## 📝 Notes & Limitations

### ⚠️ Precautions When Using the Service
- Ensure API endpoints requiring authentication are protected with proper middleware and it can be accessible by Admin.
- Do not expose sensitive environment variables (e.g., API keys) in public repositories.

### 🧱 Technical Limitations
- ...

### 🐞 Known Issues
- ...

---

## 🏆 Appeal Points

- 📦 **Centralized Inventory Oversight**: View, edit, and delete any user's inventory items with complete details like name, category, price, brand, placement, and availability.
- 📊 **Report Generation & Export**: Generate and export inventory reports across all users in PDF or Excel formats for auditing, packing, or analysis.
- 🔔 **Global Reminder Management**: Monitor and control user-set reminders, including broadcast timing and content, to maintain system consistency.
- 🧱 **Robust Electron-Based App**: Built with Electron using a modular, testable architecture, and separation between Endpoint Fetching, Data Transaction, and Interface Code.

---

_Made with ❤️ by Leonardho R. Sitanggang_