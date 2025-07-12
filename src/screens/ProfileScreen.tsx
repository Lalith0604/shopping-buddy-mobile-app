
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Edit, Package, Settings, HelpCircle, FileText, Shield, LogOut, ChevronRight, Bell, Moon } from 'lucide-react';
import AppLayout from '../components/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/base/Card';
import { Button } from '../components/base/Button';
import { Switch } from '../components/ui/switch';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { useToast } from '../hooks/use-toast';
import { cn } from '../lib/utils';

const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Dummy user data
  const user = {
    name: "Lalith Kumar",
    phone: "+91 9876543210",
    profilePicture: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face"
  };

  // Dummy orders data
  const orders = [
    { id: "ORD001", date: "2024-01-15", total: 245.60, itemCount: 8 },
    { id: "ORD002", date: "2024-01-10", total: 156.30, itemCount: 5 },
    { id: "ORD003", date: "2024-01-05", total: 89.75, itemCount: 3 }
  ];

  const handleOrderPress = (orderId: string) => {
    navigate('/order-summary', { state: { orderId } });
  };

  const handleEditProfile = () => {
    toast({
      title: "Edit Profile",
      description: "Profile editing feature coming soon!",
    });
  };

  const handleHelpItem = (item: string) => {
    toast({
      title: item,
      description: `${item} feature coming soon!`,
    });
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate('/welcome');
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
    }
  };

  return (
    <AppLayout showCart={false}>
      <div className="min-h-screen bg-background p-4 space-y-6">
        {/* User Profile Section */}
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20 shadow-lg">
              <AvatarImage src={user.profilePicture} alt={user.name} />
              <AvatarFallback className="text-xl font-semibold">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">{user.name}</h2>
              <div className="flex items-center text-muted-foreground mt-1">
                <Phone className="h-4 w-4 mr-2" />
                <span>{user.phone}</span>
              </div>
              <Button
                variant="ghost" 
                size="sm"
                onClick={handleEditProfile}
                className="mt-2 p-0 h-auto text-primary"
              >
                <Edit className="h-4 w-4 mr-1" />
                Edit Profile
              </Button>
            </div>
          </div>
        </Card>

        {/* Previous Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="h-5 w-5 mr-2" />
              Your Orders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {orders.map((order) => (
              <div
                key={order.id}
                onClick={() => handleOrderPress(order.id)}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
              >
                <div>
                  <div className="font-medium text-foreground">{order.id}</div>
                  <div className="text-sm text-muted-foreground">{order.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-foreground">₹{order.total.toFixed(2)}</div>
                  <div className="text-sm text-muted-foreground">{order.itemCount} items</div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* App Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              App Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="h-4 w-4 mr-3 text-muted-foreground" />
                <span className="text-foreground">Notifications</span>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Moon className="h-4 w-4 mr-3 text-muted-foreground" />
                <span className="text-foreground">Dark Mode</span>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </CardContent>
        </Card>

        {/* Help & Support */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Help & Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {['FAQs', 'Chat with Support', 'Email Us'].map((item) => (
              <div
                key={item}
                onClick={() => handleHelpItem(item)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
              >
                <span className="text-foreground">{item}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Legal & Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Legal & Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              { title: 'Terms & Conditions', icon: FileText },
              { title: 'Privacy Policy', icon: Shield },
              { title: 'App Version: v1.0.0', icon: null }
            ].map((item) => (
              <div
                key={item.title}
                onClick={() => item.icon && handleHelpItem(item.title)}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg transition-colors",
                  item.icon ? "hover:bg-muted cursor-pointer" : "cursor-default"
                )}
              >
                <div className="flex items-center">
                  {item.icon && <item.icon className="h-4 w-4 mr-3 text-muted-foreground" />}
                  <span className="text-foreground">{item.title}</span>
                </div>
                {item.icon && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Logout */}
        <Card>
          <CardContent className="p-4">
            <Button
              variant="destructive"
              onClick={handleLogout}
              className="w-full"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ProfileScreen;
