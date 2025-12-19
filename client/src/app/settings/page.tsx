"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Settings, Bell, Shield, Database } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [highContrast, setHighContrast] = useState(false);
  const [animations, setAnimations] = useState(true);

  return (
    <div className="container mx-auto p-6 space-y-8 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 border-b border-white/10 pb-6"
      >
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Settings className="h-6 w-6 text-primary" />
        </div>
        <div>
            <h1 className="text-3xl font-bold text-white">System Settings</h1>
            <p className="text-muted-foreground">Manage your preferences and data configurations.</p>
        </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-[250px_1fr]">
        <motion.nav 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-2"
        >
            <Button 
                variant="ghost" 
                className={`justify-start gap-2 ${activeTab === 'general' ? 'bg-white/5 text-white' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab("general")}
            >
                <Settings className="h-4 w-4" /> General
            </Button>
            <Button 
                variant="ghost" 
                className={`justify-start gap-2 ${activeTab === 'data' ? 'bg-white/5 text-white' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab("data")}
            >
                <Database className="h-4 w-4" /> Data Sources
            </Button>
            <Button 
                variant="ghost" 
                className={`justify-start gap-2 ${activeTab === 'notifications' ? 'bg-white/5 text-white' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab("notifications")}
            >
                <Bell className="h-4 w-4" /> Notifications
            </Button>
            <Button 
                variant="ghost" 
                className={`justify-start gap-2 ${activeTab === 'security' ? 'bg-white/5 text-white' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab("security")}
            >
                <Shield className="h-4 w-4" /> Security
            </Button>
        </motion.nav>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
        >
            {activeTab === "general" && (
                <>
                    <Card>
                        <CardHeader>
                            <CardTitle>Display Preferences</CardTitle>
                            <CardDescription>Customize how data is visualized on the command center.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between rounded-lg border border-white/5 p-4 bg-background/50">
                                <div className="space-y-0.5">
                                    <h4 className="text-sm font-medium text-white">High Contrast Mode</h4>
                                    <p className="text-xs text-muted-foreground">Increase visibility for tactical boards.</p>
                                </div>
                                <Switch checked={highContrast} onCheckedChange={setHighContrast} />
                            </div>
                            <div className="flex items-center justify-between rounded-lg border border-white/5 p-4 bg-background/50">
                                <div className="space-y-0.5">
                                    <h4 className="text-sm font-medium text-white">Animations</h4>
                                    <p className="text-xs text-muted-foreground">Enable smooth transitions for stats.</p>
                                </div>
                                <Switch checked={animations} onCheckedChange={setAnimations} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Regional Settings</CardTitle>
                            <CardDescription>Currency and measurement units.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs text-muted-foreground">Currency</label>
                                    <select className="w-full bg-background border border-white/10 rounded-md h-9 px-3 text-sm text-white">
                                        <option>Euro (€)</option>
                                        <option>GBP (£)</option>
                                        <option>USD ($)</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-muted-foreground">Height Unit</label>
                                    <select className="w-full bg-background border border-white/10 rounded-md h-9 px-3 text-sm text-white">
                                        <option>cm</option>
                                        <option>ft/in</option>
                                    </select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </>
            )}

            {activeTab === "data" && (
                <Card>
                    <CardHeader>
                        <CardTitle>Data Sources</CardTitle>
                        <CardDescription>Manage external API integrations.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                        <Shield className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white">Official Data Engine</h4>
                                        <p className="text-xs text-muted-foreground">Connected • Primary Source</p>
                                    </div>
                                </div>
                                <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                            </div>
                            <div className="grid gap-4 p-4 border border-white/5 rounded-lg">
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-white">API Endpoint</label>
                                    <Input defaultValue="https://api.pitchiq.io/v1" className="bg-black/20" />
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-white">API Key</label>
                                    <Input type="password" value="••••••••••••••••" readOnly className="bg-black/20" />
                                </div>
                            </div>
                        </div>
                        <Button className="w-full">Test Connection</Button>
                    </CardContent>
                </Card>
            )}

            {activeTab === "security" && (
                <Card>
                    <CardHeader>
                        <CardTitle>Security & Privacy</CardTitle>
                        <CardDescription>Manage your account security and session.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-white">New Password</label>
                                <Input type="password" placeholder="••••••••" className="bg-black/20" />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-white">Confirm Password</label>
                                <Input type="password" placeholder="••••••••" className="bg-black/20" />
                            </div>
                        </div>
                        <div className="pt-4 flex flex-col gap-3">
                            <Button className="w-full">Update Password</Button>
                            <Button variant="outline" className="w-full text-red-400 border-red-400/20 hover:bg-red-400/10">Delete Account</Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {activeTab === "notifications" && (
                <Card>
                    <CardHeader>
                        <CardTitle>Notification Preferences</CardTitle>
                        <CardDescription>Control when you receive alerts.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { title: "Market Alerts", desc: "Notify on significant value changes" },
                            { title: "Tactical Shift", desc: "Alert when teams change formation" },
                            { title: "Match Reports", desc: "Send summary after match ends" }
                        ].map(item => (
                            <div key={item.title} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                                <div>
                                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                        ))}
                    </CardContent>
                </Card>
            )}
        </motion.div>
      </div>
    </div>
  );
}