"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Settings, Bell, Shield, Database } from "lucide-react";

export default function SettingsPage() {
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
            <Button variant="ghost" className="justify-start gap-2 bg-white/5 text-white">
                <Settings className="h-4 w-4" /> General
            </Button>
            <Button variant="ghost" className="justify-start gap-2 text-muted-foreground hover:text-white">
                <Database className="h-4 w-4" /> Data Sources
            </Button>
            <Button variant="ghost" className="justify-start gap-2 text-muted-foreground hover:text-white">
                <Bell className="h-4 w-4" /> Notifications
            </Button>
            <Button variant="ghost" className="justify-start gap-2 text-muted-foreground hover:text-white">
                <Shield className="h-4 w-4" /> Security
            </Button>
        </motion.nav>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
        >
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
                    <CardTitle>API Configuration</CardTitle>
                    <CardDescription>Manage your connection to the data engine.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <label className="text-sm font-medium text-white">API Endpoint</label>
                        <Input defaultValue="https://api.pitchiq.io/v1" />
                    </div>
                    <div className="grid gap-2">
                        <label className="text-sm font-medium text-white">Refresh Rate (ms)</label>
                        <Input defaultValue="5000" type="number" />
                    </div>
                    <div className="pt-4 flex justify-end">
                        <Button>Save Changes</Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </div>
  );
}