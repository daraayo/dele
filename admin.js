document.addEventListener('DOMContentLoaded', function() {
    let adminLoggedIn = false;

    function adminLogin() {
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;
        
        console.log('Attempting admin login with:', username, password);
    
        let adminCredentials = JSON.parse(localStorage.getItem('adminCredentials'));
        console.log('Stored admin credentials:', adminCredentials);
    
        if (adminCredentials && username === adminCredentials.username && password === adminCredentials.password) {
            console.log('Admin login successful');
            adminLoggedIn = true;
            document.getElementById('admin-login').style.display = 'none';
            document.getElementById('admin-dashboard').style.display = 'block';
            loadDashboardData();
        } else {
            console.log('Admin login failed');
            alert('Invalid admin credentials');
        }
    }
    
    function adminLogout() {
        adminLoggedIn = false;
        document.getElementById('admin-login').style.display = 'block';
        document.getElementById('admin-dashboard').style.display = 'none';
    }

    function loadDashboardData() {
        let userQuizData = JSON.parse(localStorage.getItem('userQuizData')) || {};
        
        let totalUsers = Object.keys(userQuizData).length;
        let completedQuizzes = 0;
        let incompleteQuizzes = 0;
        
        document.getElementById('total-users').textContent = totalUsers;
        
        let userDetailsHTML = '<table class="table"><thead><tr><th>Username</th><th>Registration Date</th><th>Last Login</th><th>Browser</th><th>Quiz Status</th><th>Score</th><th>Conclusion</th></tr></thead><tbody>';
        
        for (let username in userQuizData) {
            let userData = userQuizData[username];
            let quizStatus = userData.quizCompleted ? 'Completed' : 'Incomplete';
            let score = userData.quizCompleted ? userData.totalScore : 'N/A';
            let conclusion = userData.quizCompleted ? userData.conclusion : 'N/A';
            
            if (userData.quizCompleted) {
                completedQuizzes++;
            } else {
                incompleteQuizzes++;
            }
            
            userDetailsHTML += `
                <tr>
                    <td>${username}</td>
                    <td>${new Date(userData.registrationDate).toLocaleString()}</td>
                    <td>${userData.lastLogin ? new Date(userData.lastLogin).toLocaleString() : 'N/A'}</td>
                    <td>${userData.browser}</td>
                    <td>${quizStatus}</td>
                    <td>${score}</td>
                    <td>${conclusion}</td>
                </tr>
            `;
        }
        
        userDetailsHTML += '</tbody></table>';
        
        document.getElementById('completed-quizzes').textContent = completedQuizzes;
        document.getElementById('incomplete-quizzes').textContent = incompleteQuizzes;
        document.getElementById('user-details').innerHTML = userDetailsHTML;
    }
    
    // Attach event listeners
    document.getElementById('admin-login-btn').addEventListener('click', adminLogin);
    document.getElementById('admin-logout-btn').addEventListener('click', adminLogout);

    // Check if admin is logged in when the page loads
    if (adminLoggedIn) {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        loadDashboardData();
    }
});
