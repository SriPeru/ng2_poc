var DashboardList = (function () {
    function DashboardList() {
        this.dashboard = [
            { name: 'Facebook', image: 'facebook' },
            { name: 'Twitter', image: 'twitter' },
            { name: 'Pintrest', image: 'pintrest' },
            { name: 'LinkedIn', image: 'linkedin' }
        ];
    }
    DashboardList.prototype.get = function () {
        return this.dashboard;
    };
    DashboardList.prototype.add = function (value) {
        this.dashboard.push({
            name: value,
            image: value
        });
    };
    return DashboardList;
})();
exports.DashboardList = DashboardList;
