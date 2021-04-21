let app = angular.module("RebrandtApp", []);
app.controller("PaintingController", function($scope){
    $scope.paintingCount = 0;
    $scope.paintings = 
    ["paintings/1.png",
    "paintings/2.png",
    "paintings/3.png",
    "paintings/4.png",
    "paintings/5.png",
    "paintings/6.png",
    ]

    $scope.previous = function(){
        $scope.paintingCount = $scope.paintingCount - 1;
    }

    $scope.next = function(){
        $scope.paintingCount = $scope.paintingCount + 1;
    }
});
    

