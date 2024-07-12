<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sosh Me | Posts</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            text-align: center;
            margin: 0;
            padding: 20px;
        }

        h2 {
            color: #007BFF;
            margin-bottom: 20px;
        }

        button {
            padding: 10px 20px;
            margin: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            background-color: #007BFF;
            color: white;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }

        input[type="text"] {
            padding: 10px;
            margin: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 300px;
        }

        .userCred {
            margin: 20px 0;
            font-size: 18px;
        }

        #userId {
            font-size: 24px;
            color: blueviolet;
            background-color: bisque;
            padding: 5px;
            border-radius: 4px;
        }

        #msg {
            color: red;
            margin-top: 10px;
        }

        #post-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
        }

        .postBlocks {
            background-color: aqua;
            border: 2px solid black;
            width: 300px;
            margin: 10px;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.2s;
        }

        .postBlocks:hover {
            transform: scale(1.05);
        }

        .postTitle {
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 5px;
        }

        .postContent {
            font-size: 16px;
            margin-bottom: 10px;
        }

        .postFooter {
            font-size: 14px;
            color: gray;
            text-align: right;
        }
    </style>
</head>
<body onload="validateToken()">
    <span>
        <h2>Posts by all the Peers are presented here.</h2>
        <button onclick="createPostPage()">Create Post</button>
        <button onclick="logout()">Logout</button>
        <input type="text" placeholder="Search Post by Author Name:" onchange="handleAuthorPost(event)">
    </span>
    
    <h4 class="userCred">
        User: <i id="userId"></i> | Followers: <i id="followersCount"></i>
    </h4>
    
    <h3 id="msg"></h3>
    <div id="post-container"></div>

    <script src="view-posts.js"></script>
    <script src="logout.js"></script>
</body>
</html>
