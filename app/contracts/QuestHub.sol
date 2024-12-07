// contracts/QuestHub.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract QuestHub {
    struct UserData {
        uint256 points;
        string[] completedQuests;
        string ensName;
        uint256 lastUpdated;
    }

    mapping(address => UserData) public userData;
    address[] public userAddresses;
    
    event QuestCompleted(address user, string questId, uint256 points);
    event LeaderboardUpdated(address user, uint256 newPoints);

    function completeQuest(string memory questId, uint256 points) external {
        UserData storage user = userData[msg.sender];
        user.points += points;
        user.completedQuests.push(questId);
        user.lastUpdated = block.timestamp;

        if (!isUserRegistered(msg.sender)) {
            userAddresses.push(msg.sender);
        }

        emit QuestCompleted(msg.sender, questId, points);
        emit LeaderboardUpdated(msg.sender, user.points);
    }

    function isUserRegistered(address user) public view returns (bool) {
        return userData[user].lastUpdated > 0;
    }

    function getTopUsers(uint256 limit) public view returns (
        address[] memory,
        uint256[] memory,
        string[] memory
    ) {
        uint256 count = min(limit, userAddresses.length);
        address[] memory addresses = new address[](count);
        uint256[] memory points = new uint256[](count);
        string[] memory ensNames = new string[](count);

        // Simple bubble sort for demo (would need optimization for production)
        address[] memory sortedAddresses = userAddresses;
        for (uint i = 0; i < sortedAddresses.length; i++) {
            for (uint j = i + 1; j < sortedAddresses.length; j++) {
                if (userData[sortedAddresses[i]].points < userData[sortedAddresses[j]].points) {
                    address temp = sortedAddresses[i];
                    sortedAddresses[i] = sortedAddresses[j];
                    sortedAddresses[j] = temp;
                }
            }
        }

        for (uint256 i = 0; i < count; i++) {
            addresses[i] = sortedAddresses[i];
            points[i] = userData[sortedAddresses[i]].points;
            ensNames[i] = userData[sortedAddresses[i]].ensName;
        }

        return (addresses, points, ensNames);
    }

    function min(uint256 a, uint256 b) private pure returns (uint256) {
        return a < b ? a : b;
    }
}