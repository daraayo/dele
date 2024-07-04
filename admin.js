<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Admin Dashboard</a>
            <button id="admin-logout-btn" class="btn btn-outline-light">Logout</button>
        </div>
    </nav>

    <div class="container mt-5">
        <div id="admin-login" class="card">
            <div class="card-body">
                <h2 class="card-title text-center mb-4">Admin Login</h2>
                <input type="text" id="admin-username" class="form-control mb-3" placeholder="Username">
                <input type="password" id="admin-password" class="form-control mb-3" placeholder="Password">
                <button id="admin-login-btn" class="btn btn-primary w-100">Login</button>
            </div>
        </div>
        

        <div id="admin-dashboard" style="display: none;">
            <h2 class="mb-4">Website Statistics</h2>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Registered Users</h5>
                            <p id="total-users" class="card-text display-4"></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Completed Quizzes</h5>
                            <p id="completed-quizzes" class="card-text display-4"></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Incomplete Quizzes</h5>
                            <p id="incomplete-quizzes" class="card-text display-4"></p>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="mt-5 mb-3">User Details</h3>
            <table class="table table-striped">
                
                <tbody id="user-details">
                    <!-- User details will be inserted here -->
                </tbody>
            </table>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="admin.js"></script>
</body>
</html>
